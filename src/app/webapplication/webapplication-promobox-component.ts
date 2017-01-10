import { Component, OnInit, Input } from '@angular/core';

import { WebApplication } from './../shared/models/webapplication';
@Component({
    moduleId: module.id,
    selector: 'webapplication-promobox',
    styleUrls: [ 'webapplication.component.css'],
    templateUrl: 'webapplication-promobox.component.html'
})
export class WebApplicationPromoboxComponent implements OnInit {
    @Input()
    Model: WebApplication;
    constructor() { }

    ngOnInit() { }

}