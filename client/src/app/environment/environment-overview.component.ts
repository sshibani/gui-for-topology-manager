import { Component, OnInit, ViewChild } from '@angular/core';

import { ComponentBase } from './../shared/bases/component-base';
import { CdEnvironment } from './../shared/models/cdenvironment';
import { EnvironmentService } from './../services/environment.service';

import { TopologyTypeService } from './../services/topologytype.service';
import { MessageService } from './../services/message.service';

@Component({
    moduleId: module.id,
    selector: 'env',
    styleUrls: [ 'environment.component.css'],
    templateUrl: 'environment-overview.component.html',
    providers: [ EnvironmentService, TopologyTypeService ]
})
export class EnvironmentOverviewComponent extends ComponentBase<CdEnvironment> implements OnInit {
    constructor(environmentService: EnvironmentService, messageService: MessageService) {
                    super(environmentService, messageService);
                 }

    ngOnInit() {
        this.Init();
    }
}