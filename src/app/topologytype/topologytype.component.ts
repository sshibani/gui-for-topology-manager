import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { TopologyType } from './../shared/models/topologytype';
import { TopologyTypeService } from './../services/topologytype.service';

import { TopologyTypeEditComponent } from './topologytype-edit.component';

@Component({
    moduleId: module.id,
    selector: 'topologytype',
    styleUrls: [ "topologytype.component.css" ],
    templateUrl: 'topologytype.component.html',
    providers: [ TopologyTypeService ]
})
export class TopologyTypeComponent implements OnInit {
    private _service: TopologyTypeService;

    @Input("Model")
    model: TopologyType;

    @ViewChild(TopologyTypeEditComponent)
    private _environmentEdit: TopologyTypeEditComponent;

    constructor(service: TopologyTypeService,
                private router: Router,
                private route: ActivatedRoute) {
        this._service = service;
    }

    ngOnInit() {
         this.route.params.forEach((params: Params) => {
             let id = params['id'];
             this._service.Get(id)
                .then(e => this.model = e);

        });
     }

    ShowEditWindow(event: any): void {
        this._environmentEdit.Show();
    }

}