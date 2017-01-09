import { Component, OnInit, Input } from '@angular/core';

import { WebsiteService } from './../services/website.service';
import { Website } from './../shared/models/website';

@Component({
    moduleId: module.id,
    selector: 'website-overview',
    styleUrls: [ 'website-overview.component.css'],
    templateUrl: 'website-overview.component.html',
    providers: [ WebsiteService ]
})
export class WebsiteOverviewComponent implements OnInit {
    title = "website";
    _websites: Website[];
    @Input()
    _viewWebsites: Website[];
    constructor(private websiteService: WebsiteService) { }

    ngOnInit() {
        this.Load();
    }

    Load(): void {
        this.websiteService.GetAll().then(websites => {
                this._websites = websites;
                this._viewWebsites = websites;
             });
    }

    search(event: any): void {
        console.log(event.target.value);
        this._viewWebsites = this._websites.filter(website => website.Id.includes(event.target.value));
    }
}