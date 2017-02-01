import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { Website } from './../shared/models/website';
import { WebsiteService } from './../services/website.service';
import { ComponentEditBase } from './../shared/bases/componentedit-base';
import { MessageService } from './../services/message.service';
import { EnvironmentService } from './../services/environment.service';

@Component({
    moduleId: module.id,
    selector: 'website-edit',
    styleUrls: [ 'website.component.css'],
    templateUrl: 'website-edit.component.html',
    providers: [  ]
})
export class WebsiteEditComponent extends ComponentEditBase<Website> implements OnInit {
    availableEnvironments: string[][];

    constructor(service: WebsiteService,
                messageService: MessageService,
                private envService: EnvironmentService) {
        super(service, messageService);
    }

    ngOnInit() {
        if (this.model) {
            this.isNew = false;
            this.tabHeader = "Edit website (" + this.model.Id + ")";
        } else {
            this.tabHeader = "Add Website";
            this.model = new Website();
            this.model.BaseUrls = [ "" ];
            this.showIdField = true;
            this.isNew = true;
        }
        this.getCdEnvironments();
    }

    getCdEnvironments(): void {
        this.envService.getCdEnvrinmentsTitle()
                        .subscribe(item => this.availableEnvironments = item);
        console.log(this.availableEnvironments);
    }

    addBaseUrl(): void {
        this.model.BaseUrls.push("");
    }
    deleteBaseUrl(data: string): void {
        this.model.BaseUrls = this.model.BaseUrls.filter(item => item !== data);
    }
}