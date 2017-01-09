import { Injectable } from '@angular/core';
import { Headers, Response, Http } from '@angular/http';
import { CommonConst } from './../shared/constants';
import 'rxjs/add/operator/toPromise';

import { CdEnvironment } from './../shared/models/cdenvironment';

export abstract class ServiceBase<T> {
    private _environmentUrl;
    private _headers;
    private _http: Http;

    constructor(http: Http) {
        //this.EnvironmentUrl = CommonConst.TopologyManagerBaseUrl + "cdenvironments";
        this._http = http;
        this._environmentUrl = "data/websites.json";
        this._headers = new Headers({'Content-Type': 'application/json'});
    }

    public GetAll(): Promise<T[]> {
        return this._http.get(this._environmentUrl)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
    }

    abstract extractData(res: Response);

    // getEnvironment(id: string): Promise<CdEnvironment> {
    //      return this.getEnvironments()
    //                 .then(env => env.find(e => e.Id === id));
    // }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}