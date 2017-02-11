import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { CdEnvironment,
        OAuthCredentials,
        AnonymousCredentials  } from './../shared/models/cdenvironment';

import { EnvironmentService } from './../services/environment.service';
import { TopologyTypeService } from './../services/topologytype.service';
import { MessageService } from './../services/message.service';

import {ComponentEditBase } from './../shared/bases/componentedit-base';

@Component({
    moduleId: module.id,
    selector: 'cd-env-edit',
    styleUrls: [ 'cdenvironment.component.css'],
    templateUrl: 'cdenvironment-edit.component.html',
    providers: [ ]
})
export class CdEnvironmentEditComponent extends ComponentEditBase<CdEnvironment> implements OnInit {
    authenticationTypes = CdEnvironment.AuthenticationTypes;
    purposes: string[];
    constructor(service: EnvironmentService,
                messageService: MessageService,
                private topologyTypeService: TopologyTypeService) {
        super(service, messageService);
    }

    ngOnInit() {
        if (this.model) {
            this.tabHeader = "Edit Environment (" + this.model.Id + ")";
            this.isNew = false;
        } else {
            this.isNew = true;
            this.tabHeader = "Add Environment";
            this.model = new CdEnvironment();
            this.model.Credentials = new AnonymousCredentials();
            this.model.DiscoveryEndpointUrl = "http://localhost:8082/discovery.svc";
            this.showIdField = true;
        }
        this.getAvailableEnvironmentPurposes();
    }

    getAvailableEnvironmentPurposes(): void {
        this.topologyTypeService.getPurposes()
                    .subscribe(a => this.purposes = a);
    }

    onChange(type: any) {
        switch (type) {
            case "Anonymous":
                this.model.Credentials = new AnonymousCredentials();
                break;
            case "OAuth":
                this.model.Credentials = new OAuthCredentials();
                break;
            default:
                break;
        }
        console.log(this.model.Credentials.ODatatype);
    }
}