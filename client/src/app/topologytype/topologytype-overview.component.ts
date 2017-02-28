import { Component, OnInit, ViewChild } from '@angular/core';

import { ComponentBase } from './../shared/bases/component-base';
import { TopologyTypeService } from './../services/topologytype.service';
import { MessageService } from './../services/message.service';
import { TopologyType } from './../shared/models/topologytype';


@Component({
    moduleId: module.id,
    selector: 'topologtype-overview',
    templateUrl: 'topologytype-overview.component.html',
    providers: [ TopologyTypeService]
})
export class TopologyTypeOverviewComponent extends ComponentBase<TopologyType> implements OnInit {
    title = 'TopologyType';
    constructor(service: TopologyTypeService, messageService: MessageService) {
        super(service, messageService);
    }

    ngOnInit() {
        this.Init();
    }

}