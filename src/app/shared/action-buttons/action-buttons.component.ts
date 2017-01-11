import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ITopologyItem } from './../models/contracts/itopologyitem';

@Component({
    moduleId: module.id,
    selector: 'action-buttons',
    templateUrl: 'action-buttons.component.html'
})
export class ActionButtonsComponent implements OnInit {
    @Input()
    Model: ITopologyItem;
    constructor(private router: Router) { }

    ngOnInit() { }

    ZoomIn(): void {
        let link = ['/environment', this.Model.Id];
        this.router.navigate(link);
    }
}