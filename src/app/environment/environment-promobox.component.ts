import { Component, OnInit, Input } from '@angular/core';

import { RouteConst } from './../shared/constants';
import { CdEnvironment } from './../shared/models/cdenvironment';

import { EnvironmentService } from './../services/environment.service';

@Component({
    moduleId: module.id,
    styleUrls: [ "environment.component.css" ],
    selector: 'environment-promobox',
    templateUrl: 'environment-promobox.component.html',

})
export class EnvironmentPromoboxComponent implements OnInit {
    detailsPath: string = RouteConst.Environmentpath;
    @Input("Model")
    model: CdEnvironment;

    private _service: EnvironmentService;
    constructor(service: EnvironmentService) {
        this._service = service;
    }

    ngOnInit() { }

    public Delete(): void {
        this._service.Delete(this.model);
    }
}