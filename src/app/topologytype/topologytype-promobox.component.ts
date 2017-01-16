import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { TopologyType } from './../shared/models/topologytype';
import { TopologyTypeService } from './../services/topologytype.service';
import { ComponentPromoboxBase } from './../shared/bases/componentpromobox-base';

import { TopologyTypeEditComponent } from './topologytype-edit.component';

@Component({
    moduleId: module.id,
    selector: 'topologytype-promobox',
    styleUrls: [ 'topologytype.component.css'],
    templateUrl: 'topologytype-promobox.component.html'
})
export class TopologyTypePromoboxComponent extends ComponentPromoboxBase<TopologyType> implements OnInit {
    // @ViewChild(TopologyTypeEditComponent)
    // private _topologyTypeEdit: TopologyTypeEditComponent;

    constructor(service: TopologyTypeService) {
        super(service);
    }

    ngOnInit() { }

    //  ShowEditWindow(event: any): void {
    //     this._topologyTypeEdit.Show();
    // }
}