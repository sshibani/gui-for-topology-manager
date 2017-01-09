import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CdEnvironment } from './../shared/models/cdenvironment';

import { EnvironmentService } from './../services/environment.service';

@Component({
    moduleId: module.id,
    selector: 'env',
    styleUrls: [ 'environment.component.css'],
    templateUrl: 'environment.component.html'
})
export class EnvironmentComponent implements OnInit {
    title = "adsfa";
    @Input()
    cdEnvironment: CdEnvironment;

    constructor(private environmentService: EnvironmentService,
                private router: Router,
                private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
             let id = params['id'];
             console.warn("id:" + id.toString());
             this.environmentService.getEnvironment(id.toString())
                .then(e => this.cdEnvironment = e);
        });
     }
}