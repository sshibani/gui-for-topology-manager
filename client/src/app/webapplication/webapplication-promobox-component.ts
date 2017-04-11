import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { WebApplication } from './../shared/models/webapplication';
import { ComponentPromoboxBase } from './../shared/bases/componentpromobox-base';
import { WebApplicationService } from './../services/webapplication.service';

import { WebApplicationEditComponent } from './webapplication-edit.component';

@Component({
    moduleId: module.id,
    selector: 'webapplication-promobox',
    styleUrls: [ 'webapplication.component.css'],
    templateUrl: 'webapplication-promobox.component.html'
})
export class WebApplicationPromoboxComponent extends ComponentPromoboxBase<WebApplication> implements OnInit {

    constructor(service: WebApplicationService) {
        super(service);
    }

    ngOnInit() { }

}
