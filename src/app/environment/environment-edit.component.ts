import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';

import { CdEnvironment } from './../shared/models/cdenvironment';

import { EnvironmentService } from './../services/environment.service';


@Component({
    moduleId: module.id,
    selector: 'env-edit',
    styleUrls: [ 'environment.component.css'],
    templateUrl: 'environment-edit.component.html',
    providers: [ EnvironmentService ]
})
export class EnvironmentEditComponent implements OnInit {
    @Input("Model")
    model: CdEnvironment;
    @ViewChild('lgModal')
    modal:any;
    @Output("ModelUpdate")
    modelUpdate = new EventEmitter<CdEnvironment>();

    tabHeader: string;
    showIdField: boolean = false;
    autoGenerateId: boolean = true;
    authenticationTypes = CdEnvironment.AuthenticationTypes;
    private _service: EnvironmentService;

    constructor(service: EnvironmentService) {
        this._service = service;
    }

    ngOnInit() {
        if (this.model) {
            this.tabHeader = "Edit Environment (" + this.model.Id + ")";
        } else {
            this.tabHeader = "Add Environment";
            this.model = new CdEnvironment();
            this.model.DiscoveryEndpointUrl = "http://localhost:8082/discovery.svc";
            this.showIdField = true;
        }
    }

    Save(event: any): void {
        console.log("save");
        this._service.Create(this.model)
            .then(a => this.modelUpdate.emit(a));
        this.modal.hide();
    }

    Show(): void {
        this.modal.show();
    }
}