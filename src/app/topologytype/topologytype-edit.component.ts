import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { TopologyType } from './../shared/models/topologytype';
import { TopologyTypeService } from './../services/topologytype.service';
import { ComponentEditBase } from './../shared/bases/componentedit-base';

@Component({
    moduleId: module.id,
    selector: 'topologytype-edit',
    styleUrls: [ 'topologytype.component.css'],
    templateUrl: 'topologytype-edit.component.html',
    providers: [ ]
})
export class TopologyTypeEditComponent extends ComponentEditBase<TopologyType> implements OnInit {

    constructor(service: TopologyTypeService) {
        super(service);
    }

    ngOnInit() {
        if (this.model) {
            this.isNew = false;
            this.tabHeader = "Edit TopologyType (" + this.model.Id + ")";
        } else {
            this.tabHeader = "Add Topology Type";
            this.model = new TopologyType();
            this.model.EnvironmentPurposes = [ "a", "b" ];
            this.showIdField = true;
            this.isNew = true;
        }
    }
}