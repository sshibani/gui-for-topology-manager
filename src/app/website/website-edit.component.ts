import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { Website } from './../shared/models/website';
import { WebsiteService } from './../services/website.service';
import { ComponentEditBase } from './../shared/bases/componentedit-base';

import { EnvironmentService } from './../services/environment.service';



@Component({
    moduleId: module.id,
    selector: 'website-edit',
    styleUrls: [ 'website.component.css'],
    templateUrl: 'website-edit.component.html',
    providers: [ EnvironmentService ]
})
export class WebsiteEditComponent extends ComponentEditBase<Website> implements OnInit {
    availableEnvironments: string[][];

    constructor(service: WebsiteService,
                private envService: EnvironmentService) {
        super(service);
    }

    ngOnInit() {
        if (this.model) {
            this.isNew = false;
            this.tabHeader = "Edit website (" + this.model.Id + ")";
        } else {
            this.tabHeader = "Add Website";
            this.model = new Website();
            this.model.BaseUrls = [ "http://localhost:99", "http://test.nl" ];
            this.showIdField = true;
            this.isNew = true;
        }
        this.envService.getCdEnvrinmentsTitle()
                        .then(item => this.availableEnvironments = item);
        console.log(this.availableEnvironments);
    }
}