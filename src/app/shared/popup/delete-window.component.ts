import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { ITopologyItem } from './../models/contracts/itopologyitem';

@Component({
    moduleId: module.id,
    selector: 'delete-item',
    templateUrl: 'delete-window.component.html'
})
export class DeleteWindowComponent implements OnInit {
    // @Input("Model")
    // model: ITopologyItem;
    // @Output()
    // onDelete = new EventEmitter<ITopologyItem>();
    // @ViewChild('bsModal')
    // modal:any;
    constructor() { }

    ngOnInit() { }

    // Delete() {
    //     this.onDelete.emit(this.deleteItem);
    // }

    public Show() {
        console.log("show k");
        //this.modal.show();
    }
}