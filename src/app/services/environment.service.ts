import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';


import { ServiceBase } from './service-base.service';

import { CdEnvironment } from './../shared/models/cdenvironment';

@Injectable()
export class EnvironmentService extends ServiceBase<CdEnvironment> {

    constructor(private http: Http) {
        super(http, "CdEnvironments");
    }

    extractData(res: Response) {
        console.warn(res.json());
        return res.json().value as CdEnvironment[];
    }

    handleCreate(res: Response) {
        console.log(res);
        if (res.status === 201) {
            return res.json() as CdEnvironment;
        }
    }
    handleDelete(res: Response) {

    }
}