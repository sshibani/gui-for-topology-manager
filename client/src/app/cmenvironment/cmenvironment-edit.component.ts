import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { CmEnvironment, WindowsCredentials } from './../shared/models/cmenvironment';

import { CmEnvironmentService } from './../services/cmenvironment.service';

import { MessageService } from './../services/message.service';

import {ComponentEditBase } from './../shared/bases/componentedit-base';

@Component({
    moduleId: module.id,
    selector: 'cm-env-edit',
    styleUrls: [ 'cmenvironment.component.css'],
    templateUrl: 'cmenvironment-edit.component.html',
    providers: [ ]
})
export class CmEnvironmentEditComponent extends ComponentEditBase<CmEnvironment> implements OnInit {

    purposes: string[];
    constructor(service: CmEnvironmentService,
                messageService: MessageService) {
        super(service, messageService);
    }

    ngOnInit() {
        if (this.model) {
            this.tabHeader = 'Edit CM Environment (' + this.model.Id + ')';
            this.isNew = false;
        } else {
            this.isNew = true;
            this.tabHeader = 'Add CM Environment';
            this.model = new CmEnvironment();
            this.model.CoreServiceCredentials = new WindowsCredentials();
            this.showIdField = true;
        }
    }
}
