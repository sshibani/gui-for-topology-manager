import { Component, OnInit } from '@angular/core';

import { ComponentBase } from './../shared/bases/component-base';

import { CdEnvironment } from './../shared/models/cdenvironment';

import { EnvironmentService } from './../services/environment.service';

@Component({
    moduleId: module.id,
    selector: 'env',
    styleUrls: [ 'environments-overview.component.css'],
    templateUrl: 'environments-overview.component.html',
    providers: [EnvironmentService]
})
export class EnvironmentsOverviewComponent extends ComponentBase<CdEnvironment> implements OnInit {

    constructor(private environmentService: EnvironmentService) {
                    super(environmentService);
                 }

    ngOnInit() {
        this.Init();
    }
}