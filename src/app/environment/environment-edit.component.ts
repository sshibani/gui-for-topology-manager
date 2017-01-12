import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { CdEnvironment } from './../shared/models/cdenvironment';

@Component({
    moduleId: module.id,
    selector: 'env-edit',
    styleUrls: [ 'environment.component.css'],
    templateUrl: 'environment-edit.component.html'
})
export class EnvironmentEditComponent implements OnInit {
    @Input("Model")
    model: CdEnvironment;
    @ViewChild('lgModal')
    modal:any;

    constructor() { }

    ngOnInit() { }

    Save(event: any): void {
        console.log("save");
        this.modal.hide();
    }
}