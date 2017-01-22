import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { RouteConst } from './../shared/constants';
import { TopologyType } from './../shared/models/topologytype';
import { TopologyTypeService } from './../services/topologytype.service';
import { ComponentPromoboxBase } from './../shared/bases/componentpromobox-base';

@Component({
    moduleId: module.id,
    selector: 'topologytype-promobox',
    styleUrls: [ 'topologytype.component.css'],
    templateUrl: 'topologytype-promobox.component.html'
})
export class TopologyTypePromoboxComponent extends ComponentPromoboxBase<TopologyType> implements OnInit {
    detailsPath: string = RouteConst.TopologyTypePath;
    constructor(service: TopologyTypeService) {
        super(service);
    }

    ngOnInit() { }


}