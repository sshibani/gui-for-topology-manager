import { Injectable, EventEmitter, Output } from '@angular/core';
import { Headers, Response, Http } from '@angular/http';
import { CommonConst } from './../shared/constants';
import 'rxjs/add/operator/toPromise';

import { TopologyEnvironment } from './../shared/models/topologyenvironment';


@Injectable()
export class TopologyEnvironmentService {
    private _url;
    private _headers;
    private _http: Http;

    constructor(http: Http) {
        this._http = http;
        //this._messageService = messageService;
        // this._environmentUrl = endPoint;
        this._url = CommonConst.TopologyManagerBaseUrl + "TopologyEnvironment";
        this._headers = new Headers();
        // this._headers.append('Authorization', 'Basic ' + btoa('administrator:Tr1v1d3nt'));
        this._headers.append('Content-Type', 'application/json');
    }


    public GetAll(): Promise<TopologyEnvironment[]> {
        return this._http.get(this._url, { headers: this._headers })
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
    }
    // public Get(name: string): Promise<TopologyEnvironment> {
    //      return this.GetAll()
    //                 .then(env => env.find(e => e.Name === name));
    // }

    extractData(res: Response) {
        console.log(res.json());
        return res.json() as TopologyEnvironment[];
        //return this._cacheResults;
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        //this._messageService.SendMessage("error", error.message, 5000);
        return Promise.reject(error.message || error);
    }
}