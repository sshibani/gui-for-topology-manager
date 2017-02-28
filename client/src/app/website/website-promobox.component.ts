import { Component, OnInit, Input } from '@angular/core';

import { Website } from './../shared/models/website';
import { WebsiteService } from './../services/website.service';
import { RouteConst } from './../shared/constants';
import { ComponentPromoboxBase } from './../shared/bases/componentpromobox-base';


@Component({
    moduleId: module.id,
    selector: 'website-promobox',
    styleUrls: [ 'website.component.css'],
    templateUrl: 'website-promobox.component.html'
})
export class WebsitePromoboxComponent extends ComponentPromoboxBase<Website> implements OnInit {
     detailsPath: string = RouteConst.WebsitePath;

    constructor(service: WebsiteService) {
        super(service);
    }

    ngOnInit() { }

}
