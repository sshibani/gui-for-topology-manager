import { Component, OnInit, Input } from '@angular/core';

import { RouteConst } from './../shared/constants';
import { Mapping } from './../shared/models/mapping';
import { ComponentPromoboxBase } from './../shared/bases/componentpromobox-base';
import { MappingService } from './../services/mapping.service';
@Component({
    moduleId: module.id,
    selector: 'mapping-promobox',
    styleUrls: [ 'mapping.component.css'],
    templateUrl: 'mapping-promobox.component.html'
})
export class MappingPromoboxComponent extends ComponentPromoboxBase<Mapping> implements OnInit {
    detailsPath: string = RouteConst.WebsitePath;

    constructor(service: MappingService) {
        super(service);
    }

    ngOnInit() { }

}
