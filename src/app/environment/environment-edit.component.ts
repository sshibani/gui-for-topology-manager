import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { CdEnvironment } from './../shared/models/cdenvironment';

import { EnvironmentService } from './../services/environment.service';
import {ComponentEditBase } from './../shared/bases/componentedit-base';

@Component({
    moduleId: module.id,
    selector: 'env-edit',
    styleUrls: [ 'environment.component.css'],
    templateUrl: 'environment-edit.component.html',
    providers: [ ]
})
export class EnvironmentEditComponent extends ComponentEditBase<CdEnvironment> implements OnInit {
    authenticationTypes = CdEnvironment.AuthenticationTypes;

    constructor(service: EnvironmentService) {
        super(service);
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
}