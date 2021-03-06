import { Component, OnInit, ViewChild } from '@angular/core';

import { ComponentBase } from './../shared/bases/component-base';
import { CdEnvironment } from './../shared/models/cdenvironment';
import { EnvironmentService } from './../services/environment.service';

import { TopologyTypeService } from './../services/topologytype.service';
import { MessageService } from './../services/message.service';

@Component({
    moduleId: module.id,
    selector: 'env',
    styleUrls: [ 'cdenvironment.component.css'],
    templateUrl: 'cdenvironment-overview.component.html',
    providers: [ EnvironmentService, TopologyTypeService ]
})
export class CdEnvironmentOverviewComponent extends ComponentBase<CdEnvironment> implements OnInit {
    title = 'CdEnvironments';
    constructor(environmentService: EnvironmentService, messageService: MessageService) {
                    super(environmentService, messageService);
                 }

    ngOnInit() {
        this.Init();
    }
}
