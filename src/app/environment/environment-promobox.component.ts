import { Component, OnInit, Input } from '@angular/core';

import { RouteConst } from './../shared/constants';
import { CdEnvironment } from './../shared/models/cdenvironment';

@Component({
    moduleId: module.id,
    styleUrls: [ "environment.component.css" ],
    selector: 'environment-promobox',
    templateUrl: 'environment-promobox.component.html'
})
export class EnvironmentPromoboxComponent implements OnInit {
    detailsPath: string = RouteConst.Environmentpath;
    @Input("Model")
    model: CdEnvironment;
    constructor() { }

    ngOnInit() { }
}