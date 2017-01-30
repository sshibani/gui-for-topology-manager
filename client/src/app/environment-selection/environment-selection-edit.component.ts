import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { TopologyEnvironment } from './../shared/models/topologyenvironment';

import { TopologyEnvironmentService } from './../services/topology-environment.service';

@Component({
    moduleId: module.id,
    selector: 'env-select-edit',
    styles: [ "environment-selection.component.css" ],
    templateUrl: 'environment-selection-edit.component.html',
    providers: [ TopologyEnvironmentService ]
})
export class EnvrionemtSelectionEditComponent implements OnInit {
    @Input('Model')
    model: TopologyEnvironment;
    @ViewChild('lgModal')
    modal:any;
    tabHeader: string;
    isNew: boolean;
    constructor(private topologyEnvironmentService: TopologyEnvironmentService) { }
    ngOnInit() {
        if (typeof this.model === 'undefined') {
            this.tabHeader = "Create a new Topology Environment";
            this.model = new TopologyEnvironment();
            this.isNew = true;
        } else {
            this.tabHeader = "Update Topology Environment (" + this.model.Name + ")";
            this.isNew = false;
        }
    }

    saveOrUpdate(): void {
        if (this.isNew) {
            this.topologyEnvironmentService.Create(this.model);
        } else {
            this.topologyEnvironmentService.Put(this.model);
        }
    }
    show(): void {
        this.modal.show();
    }

}