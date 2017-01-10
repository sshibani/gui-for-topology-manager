import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CdEnvironment } from './../shared/models/cdenvironment';
import { Website } from './../shared/models/website';

import { EnvironmentService } from './../services/environment.service';
import { WebsiteService } from './../services/website.service';

@Component({
    moduleId: module.id,
    selector: 'env',
    styleUrls: [ 'environment.component.css'],
    templateUrl: 'environment.component.html',
    providers: [ WebsiteService, EnvironmentService ]
})
export class EnvironmentComponent implements OnInit {
    title = "adsfa";
    cdid: string;
    @Input()
    cdEnvironment: CdEnvironment;
    websites: Website[];

    constructor(private environmentService: EnvironmentService,
                private websiteService: WebsiteService,
                private router: Router,
                private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
             let id = params['id'];
             this.cdid = id;
             this.environmentService.Get(id)
                .then(e => this.cdEnvironment = e);
             this.websiteService.GetByCdEnvironmentId(id)
                .then(e => this.websites = e);
        });
     }
}