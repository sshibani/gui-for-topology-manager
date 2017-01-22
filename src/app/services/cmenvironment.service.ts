import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';

import { MessageService } from './message.service';
import { ServiceBase } from './service-base.service';

import { CmEnvironment } from './../shared/models/cmenvironment';

@Injectable()
export class CmEnvironmentService extends ServiceBase<CmEnvironment> {

    constructor(private http: Http) {
        super(http, "CmEnvironments");
    }

    getCmEnvrinmentsIds(): Promise<string[]> {
        let p: Array<any> = Array<any>();
        return this.GetAll().then(items => {
             let list: string[] = [];
             items.forEach(a => list = list.concat(a.Id));
             return list;
        });
    }
}