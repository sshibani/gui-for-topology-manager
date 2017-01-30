import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { TopologyType } from './../shared/models/topologytype';
import { TopologyTypeService } from './../services/topologytype.service';

@Component({
    moduleId: module.id,
    selector: 'topologytype',
    styleUrls: [ "topologytype.component.css" ],
    templateUrl: 'topologytype.component.html',
    providers: [ TopologyTypeService ]
})
export class TopologyTypeComponent implements OnInit {
    @Input("Model")
    model: TopologyType;

    constructor(private service: TopologyTypeService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
         this.route.params.forEach((params: Params) => {
             let id = params['id'];
             this.service.Get(id)
                .then(e => this.model = e);

        });
     }
}