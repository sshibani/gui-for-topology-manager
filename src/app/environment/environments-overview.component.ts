import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CdEnvironment } from './../shared/models/cdenvironment';

import { EnvironmentService } from './../services/environment.service';

@Component({
    moduleId: module.id,
    selector: 'env',
    styleUrls: [ 'environments-overview.component.css'],
    templateUrl: 'environments-overview.component.html',
    providers: [EnvironmentService]
})
export class EnvironmentsOverviewComponent implements OnInit {
    cdEnvironments: CdEnvironment[];
    constructor(private environmentService: EnvironmentService,
                private router: Router) { }

    ngOnInit() {
        this.getCdEnvironments();
    }

    getCdEnvironments(): void {
        this.environmentService.getEnvironments().then(e => {
                                                            this.cdEnvironments = e;
                                                            console.warn(e);
                                                            });

    }

    gotoEnvironment(env: CdEnvironment): void {
        let link = ['/environment', env.Id];
        this.router.navigate(link);
    }
}