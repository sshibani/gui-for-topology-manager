import { Injectable } from '@angular/core';
import { Headers, Response, Http } from '@angular/http';
import { CommonConst } from './../shared/constants';
import 'rxjs/add/operator/toPromise';
import { ITopologyItem } from './../shared/models/contracts/itopologyitem';

import { CdEnvironment } from './../shared/models/cdenvironment';

export interface IServiceBase<T> {
    GetAll(): Promise<T[]>;
    Get(id: string): Promise<T>;
}

export abstract class ServiceBase<T extends ITopologyItem> implements IServiceBase<T> {
    private _environmentUrl;
    private _headers;
    private _http: Http;

    constructor(http: Http, endPoint: string) {
        this._http = http;
        // this._environmentUrl = endPoint;
        this._environmentUrl = CommonConst.TopologyManagerBaseUrl + endPoint;
        this._headers = new Headers();
        this._headers.append('Authorization', 'Basic ' + btoa('administrator:Tr1v1d3nt'));
        this._headers.append('Content-Type', 'text/plain');
    }


    public GetAll(): Promise<T[]> {
        return this._http.get(this._environmentUrl, { headers: this._headers })
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
    }
    Get(id: string): Promise<T> {
         return this.GetAll()
                    .then(env => env.find(e => e.Id === id));
    }

    abstract extractData(res: Response);

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}