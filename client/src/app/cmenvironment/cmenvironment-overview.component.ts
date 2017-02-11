import { Component, OnInit, ViewChild } from '@angular/core';

import { ComponentBase } from './../shared/bases/component-base';
import { CmEnvironment } from './../shared/models/cmenvironment';
import { CmEnvironmentService } from './../services/cmenvironment.service';

import { TopologyTypeService } from './../services/topologytype.service';
import { MessageService } from './../services/message.service';

@Component({
    moduleId: module.id,
    selector: 'cm-env',
    styleUrls: [ 'cmenvironment.component.css'],
    templateUrl: 'cmenvironment-overview.component.html',
    providers: [ CmEnvironmentService]
})
export class CmEnvironmentOverviewComponent extends ComponentBase<CmEnvironment> implements OnInit {
    constructor(environmentService: CmEnvironmentService, messageService: MessageService) {
                    super(environmentService, messageService);
                 }

    ngOnInit() {
        this.Init();
    }
}