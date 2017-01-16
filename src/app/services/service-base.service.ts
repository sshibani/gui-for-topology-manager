import { Injectable, EventEmitter, Output } from '@angular/core';
import { Headers, Response, Http } from '@angular/http';
import { CommonConst } from './../shared/constants';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { ITopologyItem } from './../shared/models/contracts/itopologyitem';

import { CdEnvironment } from './../shared/models/cdenvironment';

export interface IServiceBase<T> {
    GetAll(): Promise<T[]>;
    Get(id: string): Promise<T>;
    Create(data: T): void;
    Delete(data: T): void;

    GetDeletedMessage(): Observable<T>;
    GetCreateMessage(): Observable<T>;
}

export abstract class ServiceBase<T extends ITopologyItem> implements IServiceBase<T> {
    private _environmentUrl;
    private _headers;
    private _http: Http;

    private deleteSubject = new Subject<T>();
    private createSubject = new Subject<T>();

    constructor(http: Http, endPoint: string) {
        this._http = http;
        // this._environmentUrl = endPoint;
        this._environmentUrl = CommonConst.TopologyManagerBaseUrl + endPoint;
        this._headers = new Headers();
        this._headers.append('Authorization', 'Basic ' + btoa('administrator:Tr1v1d3nt'));
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
        this._http.post(this._environmentUrl, body, { headers: this._headers })
                    .toPromise()
                    .then(res => {
                        if (res.status === 201) {
                            let m = res.json() as T;
                            this.createSubject.next(m);
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
        return Promise.reject(error.message || error);
    }
}