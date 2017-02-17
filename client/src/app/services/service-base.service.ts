import { Injectable, EventEmitter, Output } from '@angular/core';
import { Headers, Response, Http } from '@angular/http';
import { Router } from '@angular/router';
import { RouteConst } from './../shared/constants';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { ContextService } from './../services/context.service';
import { ITopologyItem } from './../shared/models/contracts/itopologyitem';
import { MessageService } from './message.service';

import { CdEnvironment } from './../shared/models/cdenvironment';
import { EndPoint } from './../shared/models/topologyenvironment';

export interface IServiceBase<T> {
    GetAll(): Observable<T[]>;
    Get(id: string): Observable<T>;
    Create(data: T): Observable<T>;
    Delete(data: T): void;
    Update(data: T): Observable<T>;

    GetDeletedMessage(): Observable<T>;
    GetCreateMessage(): Observable<T>;
    GetUpdateMessage(): Observable<T>;
}

export abstract class ServiceBase<T extends ITopologyItem> implements IServiceBase<T> {
    private _environmentUrl;
    private _headers;
    private _http: Http;
    private _router: Router;
    private _messageService: MessageService;
    private _contextService: ContextService;

    private _observable: Observable<T[]>;

    private deleteSubject = new Subject<T>();
    private createSubject = new Subject<T>();
    private updateSubject = new Subject<T>();

    constructor(http: Http, router: Router, contextService: ContextService, messageService: MessageService, endPoint: string) {
        this._http = http;
        this._contextService = contextService;
        this._messageService = messageService;
        this._router = router;
        this.setHttpHeaders(endPoint);
    }


    private setHttpHeaders(endPoint: string): void {
        let topologyEndPoint = this._contextService.getContextEnvironment().TopologyManagerEndpoint;
        if (topologyEndPoint.Url.startsWith("/assets")) { //locall dev mode
            this._environmentUrl = topologyEndPoint.Url + endPoint;
        } else {
            if (topologyEndPoint.Url.endsWith("/")) {
                this._environmentUrl = topologyEndPoint.Url + "ttm201601/";
            } else {
                this._environmentUrl = topologyEndPoint.Url + "/ttm201601/";
            }
            this._environmentUrl = this._environmentUrl + endPoint;
        }
        this._headers = new Headers();
        this._headers.append('Content-Type', 'application/json');
    }

    public GetAll(): Observable<T[]> {
        if (this._observable) {
            return this._observable;
        } else {
            this._observable = this._http.get(this._environmentUrl, { headers: this._headers,  withCredentials: true })
                                    .map(this.extractData)
                                    .publishReplay(50)
                                    .refCount();
            return this._observable;
        }
    }
    public Get(id: string): Observable<T> {
         return this.GetAll()
                    .map(env => env.find(e => e.Id === id));
    }

    public Create(data: T): Observable<T> {
        let body = JSON.stringify(data);
        body = body.replace(/ODatatype/g, "@odata.type");
        console.log(body);
        return this._http.post(this._environmentUrl, body, { headers: this._headers, withCredentials: true })
                    .map(res => {
                        if (res.status === 201) {
                            let m = res.json() as T;
                            this.createSubject.next(m);
                        }
                    })
                   .catch(this.handleError);
    }
    public Update(data: T): Observable<T> {
        let body = JSON.stringify(data);
        body = body.replace(/ODatatype/g, "@odata.type");
        let url = this._environmentUrl + "('" + data.Id + "')";
        return this._http.patch(url, body, { headers: this._headers, withCredentials: true })
                        .map(res => {
                            if (res.status === 200) {
                                let m = res.json() as T;
                                this.updateSubject.next(m);
                            }
                        })
                        .catch(this.handleError);
    }

    public Delete(data: T): void {
        let url = this._environmentUrl + "('" + data.Id + "')";
        this._http.delete(url, { headers: this._headers, withCredentials: true })
                    .toPromise()
                    .then(res => {
                        if (res.status === 200) {
                            this.deleteSubject.next(data);
                        }
                    })
                    .catch(this.handleError);
    }
    public GetDeletedMessage(): Observable<T> {
        return this.deleteSubject.asObservable();
    }

    public GetUpdateMessage(): Observable<T> {
        return this.updateSubject.asObservable();
    }

    public GetCreateMessage(): Observable<T> {
        return this.createSubject.asObservable();
    }

     extractData(res: Response) {
         console.warn(res.json());
        return res.json().value as T[];
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.throw(error.message || error);
    }
}