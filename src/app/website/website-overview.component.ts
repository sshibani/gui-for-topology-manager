import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { ComponentBase } from './../shared/bases/component-base';
import { WebsiteService } from './../services/website.service';
import { Website } from './../shared/models/website';
import { WebsiteEditComponent } from './website-edit.component';
import { MessageService } from './../services/message.service';

@Component({
    moduleId: module.id,
    selector: 'website-overview',
    styleUrls: [ 'website.component.css'],
    templateUrl: 'website-overview.component.html',
    providers: [ WebsiteService ]
})
export class WebsiteOverviewComponent extends ComponentBase<Website> implements OnInit {
    title = "Website";

    @ViewChild(WebsiteEditComponent)
    private _edit: WebsiteEditComponent;

    constructor(websiteService: WebsiteService,  messageService: MessageService) {
        super(websiteService, messageService);
     }

    ngOnInit() {
        this.Init();
    }

     ShowEditWindow(event: any): void {
        this._edit.Show();
    }
}