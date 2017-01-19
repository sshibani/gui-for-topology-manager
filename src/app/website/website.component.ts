import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Website } from './../shared/models/website';
import { WebsiteService } from './../services/website.service';

import { WebsiteEditComponent } from './website-edit.component';

@Component({
    moduleId: module.id,
    selector: 'website',
    styles: [ 'website.component.css'],
    templateUrl: 'website.component.html'
})
export class WebsiteComponent implements OnInit {
  private _service: WebsiteService;

    @Input("Model")
    model: Website;

    @ViewChild(WebsiteEditComponent)
    private _edit: WebsiteEditComponent;

    constructor(service: WebsiteService,
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
        this._edit.Show();
    }
}