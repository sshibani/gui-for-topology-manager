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

    tabHeader: string;
    authenticationTypes = CdEnvironment.AuthenticationTypes;

    constructor() { }

    ngOnInit() {
        if (this.model) {
            this.tabHeader = "Edit Environment (" + this.model.Id + ")";
        } else {
            this.tabHeader = "Add Environment";
            this.model = new CdEnvironment();
        }
    }

    Save(event: any): void {
        console.log("save");
        this.modal.hide();
    }

    Show(): void {
        this.modal.show();
    }
}