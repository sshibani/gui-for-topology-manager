import { Component, OnInit, Input } from '@angular/core';

import { RouteConst } from './../shared/constants';
import { CdEnvironment } from './../shared/models/cdenvironment';

import { EnvironmentService } from './../services/environment.service';

import { ComponentPromoboxBase } from './../shared/bases/componentpromobox-base';

@Component({
    moduleId: module.id,
    styleUrls: [ "environment.component.css" ],
    selector: 'environment-promobox',
    templateUrl: 'environment-promobox.component.html',

})
export class EnvironmentPromoboxComponent extends ComponentPromoboxBase<CdEnvironment> implements OnInit {
    detailsPath: string = RouteConst.Environmentpath;
    constructor(service: EnvironmentService) {
        super(service);
    }

    ngOnInit() { }

}