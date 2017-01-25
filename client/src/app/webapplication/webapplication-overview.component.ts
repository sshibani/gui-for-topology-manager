import { Component, OnInit, Input } from '@angular/core';

import { ComponentBase } from './../shared/bases/component-base';

import { WebApplication } from './../shared/models/webapplication';

import { WebApplicationService } from './../services/webapplication.service';
import { MessageService } from './../services/message.service';
@Component({
    moduleId: module.id,
    selector: 'webapplications-overview',
    styleUrls: [ 'webapplication.component.css'],
    templateUrl: 'webapplication-overview.component.html',
    providers: [ WebApplicationService ]
})
export class WebApplicationOverviewComponent extends ComponentBase<WebApplication> implements OnInit {
    title = "WebApplications";

    constructor(webApplicationService: WebApplicationService, messageService: MessageService) {
        super(webApplicationService, messageService);
     }

    ngOnInit() {
        this.Init();
    }
}