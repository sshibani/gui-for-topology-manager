import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { MessageService } from './message.service';
import { ServiceBase } from './service-base.service';

import { CmEnvironment } from './../shared/models/cmenvironment';
import { ContextService } from './context.service';

@Injectable()
export class CmEnvironmentService extends ServiceBase<CmEnvironment> {

  constructor(private http: Http, private router: Router, private messageService: MessageService, private contextService: ContextService) {
        super(http, router, contextService, messageService, 'CmEnvironments');
    }

    getCmEnvrinmentsIds(): Observable<string[]> {
        let p: Array<any> = Array<any>();
        return this.GetAll().map(items => {
             let list: string[] = [];
             items.forEach(a => list = list.concat(a.Id));
             return list;
        });
    }
}
