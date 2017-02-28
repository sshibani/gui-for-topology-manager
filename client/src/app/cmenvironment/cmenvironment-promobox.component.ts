import { Component, OnInit, Input, ViewChild, ElementRef, QueryList } from '@angular/core';

import { RouteConst } from './../shared/constants';
import { CmEnvironment } from './../shared/models/cmenvironment';
import { CmEnvironmentService } from './../services/cmenvironment.service';
import { ComponentPromoboxBase } from './../shared/bases/componentpromobox-base';

import { DeleteWindowComponent } from './../shared/popup/delete-window.component';

@Component({
    moduleId: module.id,
    selector: 'cm-environment-promobox',
    styleUrls: [ "cmenvironment.component.css" ],
    templateUrl: 'cmenvironment-promobox.component.html',

})
export class CmEnvironmentPromoboxComponent extends ComponentPromoboxBase<CmEnvironment> implements OnInit {
    detailsPath: string = RouteConst.CmEnvironmentPath;

    constructor(service: CmEnvironmentService) {
        super(service);
    }

    ngOnInit() { }
}
