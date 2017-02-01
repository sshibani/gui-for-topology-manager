import { Component, OnInit } from '@angular/core';

import { WebApplication } from './../shared/models/webapplication';
import { WebApplicationService } from './../services/webapplication.service';
import { ComponentEditBase } from './../shared/bases/componentedit-base';
import { MessageService } from './../services/message.service';

@Component({
    moduleId: module.id,
    selector: 'webapplication-edit',
    styleUrls: [ "webapplication.component.css" ],
    templateUrl: 'webapplication-edit.component.html'
})
export class WebApplicationEditComponent extends ComponentEditBase<WebApplication> implements OnInit {

    constructor(service: WebApplicationService, messageService: MessageService) {
        super(service, messageService);
    }

    ngOnInit() {
        //WebApplication can only be modified. the creation and deletion of it is managed through Website
        //TopologyManager Odata service will create and delete webapplications.
        this.isNew = false;
        this.tabHeader = "Edit webapplication (" + this.model.Id + ")";
    }
}