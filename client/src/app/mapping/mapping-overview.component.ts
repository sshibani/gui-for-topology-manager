import { Component, OnInit } from '@angular/core';

import { ComponentBase } from './../shared/bases/component-base';
import { Mapping } from './../shared/models/mapping';
import { MappingService } from './../services/mapping.service';
import { MessageService } from './../services/message.service';
import { WebApplicationService } from './../services/webapplication.service';
import { CmEnvironmentService } from './../services/cmenvironment.service';
import { PublicationService } from './../services/publication.service';

@Component({
    moduleId: module.id,
    selector: 'mapping-overview',
    styleUrls: ['mapping.component.css'],
    templateUrl: 'mapping-overview.component.html',
    providers: [ MappingService, PublicationService, WebApplicationService, CmEnvironmentService  ]
})
export class MappingOverviewComponent extends ComponentBase<Mapping> implements OnInit {
    title = "Mappings";

    constructor(mappingService: MappingService, messageService: MessageService) {
        super(mappingService, messageService);
     }

    ngOnInit() {
        this.Init();
    }
}