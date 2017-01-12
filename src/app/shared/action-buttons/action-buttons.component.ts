import { Component, OnInit, Input } from '@angular/core';

import { ITopologyItem } from './../models/contracts/itopologyitem';

@Component({
    moduleId: module.id,
    selector: 'action-buttons',
    templateUrl: 'action-buttons.component.html'
})
export class ActionButtonsComponent implements OnInit {
    @Input('Model') model: ITopologyItem;
    @Input('Path') path: string;
    constructor() { }

    ngOnInit() { }

}