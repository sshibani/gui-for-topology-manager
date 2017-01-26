import { Injectable, EventEmitter, Output } from '@angular/core';
import { Headers, Response, Http } from '@angular/http';
import { Router } from '@angular/router';
import { RouteConst } from './../shared/constants';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { ContextService } from './../services/context.service';
import { ITopologyItem } from './../shared/models/contracts/itopologyitem';
import { MessageService } from './message.service';

import { CdEnvironment } from './../shared/models/cdenvironment';
import { EndPoint } from './../shared/models/topologyenvironment';

export interface IServiceBase<T> {
    GetAll(): Promise<T[]>;
    Get(id: string): Promise<T>;
    Create(data: T): void;
    Delete(data: T): void;
    Update(data: T): void;

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

    private deleteSubject = new Subject<T>();
    private createSubject = new Subject<T>();
    private updateSubject = new Subject<T>();

    constructor(http: Http, router: Router, contextService: ContextService, endPoint: string) {
        this._http = http;
        this._contextService = contextService;
        this._router = router;
        this.initOrRedirect();
        this.setHttpHeaders(endPoint);
        //this._messageService = messageService;
        // this._environmentUrl = endPoint;
    }

    private initOrRedirect(): void {
        if (typeof this._contextService === 'undefined' || typeof this._contextService.getContextEnvironment() === 'undefined') {
            let link = ['/' + RouteConst.EnvironmentSelectionPath];
            this._router.navigate(link);
        }
    }

    private setHttpHeaders(endPoint: string): void {
        let topologyEndPoint = this._contextService.getContextEnvironment().TopologyManagerEndpoint;
        this._environmentUrl = topologyEndPoint.Url + endPoint;
        this._headers = new Headers();
        let authentication = topologyEndPoint.UserName + ":" + topologyEndPoint.Password;
        //this._headers.append('Authorization', 'Basic ' + btoa(authentication));
        this._headers.append('Content-Type', 'application/json');
    }

    public GetAll(): Promise<T[]> {
        return this._http.get(this._environmentUrl, { headers: this._headers })
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
    }
    public Get(id: string): Promise<T> {
         return this.GetAll()
                    .then(env => env.find(e => e.Id === id));
    }
    public Create(data: T): void {
        let body = JSON.stringify(data);
        body = body.replace(/ODatatype/g, "@odata.type");
        console.log(body);
        this._http.post(this._environmentUrl, body, { headers: this._headers, withCredentials: true })
                    .toPromise()
                    .then(res => {
                        if (res.status === 201) {
                            let m = res.json() as T;
                            this.createSubject.next(m);
                        }
                    })
                    .catch(this.handleError);

    }
    public Update(data: T): void {
        let body = JSON.stringify(data);
        body = body.replace(/ODatatype/g, "@odata.type");
        let url = this._environmentUrl + "('" + data.Id + "')";
        console.log(body);
        this._http.patch(url, body, { headers: this._headers })
                    .toPromise()
                    .then(res => {
                        if (res.status === 200) {
                            let m = res.json() as T;
                            this.updateSubject.next(m);
                        }
                    })
                    .catch(this.handleError);

    }
    public Delete(data: T): void {
        let url = this._environmentUrl + "('" + data.Id + "')";
        this._http.delete(url, { headers: this._headers })
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
    //abstract extractData(res: Response);

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        //this._messageService.SendMessage("error", error.message, 5000);
        return Promise.reject(error.message || error);
    }
}