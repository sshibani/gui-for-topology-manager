import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs';

import { ServiceBase } from './service-base.service';
import { ContextService } from './context.service';
import { MessageService } from './message.service';
import { Website } from './../shared/models/website';

@Injectable()
export class WebsiteService extends ServiceBase<Website> {

    constructor(private http: Http, private router: Router,private messageService: MessageService, private contextService: ContextService) {
        super(http, router, contextService, messageService, 'Websites');
    }

    GetByCdEnvironmentId(id: string): Observable<Website[]> {
         return this.GetAll()
                    .map(env => env.filter(e => e.CdEnvironmentId === id));
    }
}
