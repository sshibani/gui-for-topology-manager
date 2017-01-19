import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { Website } from './../shared/models/website';
import { WebsiteService } from './../services/website.service';
import { ComponentEditBase } from './../shared/bases/componentedit-base';

@Component({
    moduleId: module.id,
    selector: 'website-edit',
    styleUrls: [ 'website.component.css'],
    templateUrl: 'website-edit.component.html',
    providers: [ WebsiteService ]
})
export class WebsiteEditComponent extends ComponentEditBase<Website> implements OnInit {

    constructor(service: WebsiteService) {
        super(service);
    }

    ngOnInit() {
        if (this.model) {
            this.isNew = false;
            this.tabHeader = "Edit website (" + this.model.Id + ")";
        } else {
            this.tabHeader = "Add Website";
            this.model = new Website();

            this.showIdField = true;
            this.isNew = true;
        }
    }
}