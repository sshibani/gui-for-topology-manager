import { Injectable } from '@angular/core';
import { Headers, Response, Http } from '@angular/http';
import { CommonConst } from './../shared/constants';
import 'rxjs/add/operator/toPromise';

import { CdEnvironment } from './../shared/models/cdenvironment';

@Injectable()
export class EnvironmentService {
    private EnvironmentUrl;
    private headers;

    constructor(private http: Http) {
        //this.EnvironmentUrl = CommonConst.TopologyManagerBaseUrl + "cdenvironments";
        this.EnvironmentUrl = "data/cdenvironments.json";
        this.headers = new Headers({'Content-Type': 'application/json'});
    }

    getEnvironments(): Promise<CdEnvironment[]> {
        return this.http.get(this.EnvironmentUrl)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
    }

    extractData(res: Response) {
        console.warn(res.json());
        return res.json().value as CdEnvironment[];
    }

    getEnvironment(id: string): Promise<CdEnvironment> {
         return this.getEnvironments()
                    .then(env => env.find(e => e.Id === id));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}