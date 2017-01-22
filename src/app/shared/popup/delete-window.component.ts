import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { ITopologyItem } from './../models/contracts/itopologyitem';

@Component({
    moduleId: module.id,
    selector: 'delete-item',
    templateUrl: 'delete-window.component.html'
})
export class DeleteWindowComponent implements OnInit {
    @Input("Model")
    model: ITopologyItem;
    @Output()
    onDelete = new EventEmitter<ITopologyItem>();
    @ViewChild('smModal')
    modal:any;

    constructor() { }

    ngOnInit() { }

    delete(): void {
        this.onDelete.emit(this.model);
    }

    show(): void {
        console.log("show k");
        this.modal.show();
    }
}