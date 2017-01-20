import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';

import { MessageService } from './message.service';
import { ServiceBase } from './service-base.service';

import { CdEnvironment } from './../shared/models/cdenvironment';

@Injectable()
export class EnvironmentService extends ServiceBase<CdEnvironment> {

    constructor(private http: Http) {
        super(http, "CdEnvironments");
    }

    getCdEnvrinmentsTitle(): Promise<string[][]> {
        let p: Array<any> = Array<any>();
        return this.GetAll().then(e => {
             for (var i = 0; i < e.length; i++) {
                 p[i] = [ e[i].Id, e[i].EnvironmentPurpose];
             }
             console.log(p);
            return p;
        });
    }
}