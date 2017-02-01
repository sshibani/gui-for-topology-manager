import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { TopologyType } from './../shared/models/topologytype';
import { TopologyTypeService } from './../services/topologytype.service';
import { MessageService } from './../services/message.service';
import { ComponentEditBase } from './../shared/bases/componentedit-base';

@Component({
    moduleId: module.id,
    selector: 'topologytype-edit',
    styleUrls: [ 'topologytype.component.css'],
    templateUrl: 'topologytype-edit.component.html',
    providers: [ ]
})
export class TopologyTypeEditComponent extends ComponentEditBase<TopologyType> implements OnInit {

    constructor(service: TopologyTypeService, messageService: MessageService) {
        super(service, messageService);
    }

    ngOnInit() {
        if (this.model) {
            this.isNew = false;
            this.tabHeader = "Edit TopologyType (" + this.model.Id + ")";
        } else {
            this.tabHeader = "Add Topology Type";
            this.model = new TopologyType();
            this.model.EnvironmentPurposes = [ "" ];
            this.showIdField = true;
            this.isNew = true;
        }
    }

    addPurpose(): void {
        this.model.EnvironmentPurposes.push("");
    }

    deletePurpose(data: string): void {
        this.model.EnvironmentPurposes = this.model.EnvironmentPurposes.filter(item => item !== data);
    }
}