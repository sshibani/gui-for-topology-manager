import { Component, OnInit } from '@angular/core';

import { ComponentBase } from './../shared/bases/component-base';

import { Mapping } from './../shared/models/mapping';

import { MappingService } from './../services/mapping.service';
@Component({
    moduleId: module.id,
    selector: 'mapping-overview',
    styleUrls: ['mapping.component.css'],
    templateUrl: 'mapping-overview.component.html',
    providers: [MappingService]
})
export class MappingOverviewComponent extends ComponentBase<Mapping> implements OnInit {
    title = "Mappings";

    constructor(private mappingService: MappingService) {
        super(mappingService);
     }

    ngOnInit() {
        this.Load();
    }
}