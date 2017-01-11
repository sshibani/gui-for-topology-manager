import { Component, OnInit, Input } from '@angular/core';

import { ComponentBase } from './../shared/bases/component-base';
import { WebsiteService } from './../services/website.service';
import { Website } from './../shared/models/website';

@Component({
    moduleId: module.id,
    selector: 'website-overview',
    styleUrls: [ 'website.component.css'],
    templateUrl: 'website-overview.component.html',
    providers: [ WebsiteService ]
})
export class WebsiteOverviewComponent extends ComponentBase<Website> implements OnInit {
    title = "website";


    constructor(private websiteService: WebsiteService) {
        super(websiteService);
     }

    ngOnInit() {
        this.Init();
    }
}