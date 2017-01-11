import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ITopologyItem } from './../models/contracts/itopologyitem';

@Component({
    moduleId: module.id,
    selector: 'search',
    styleUrls: ['search.component.css'],
    templateUrl: 'search.component.html'
})
export class SearchComponent implements OnInit {
    title = "Search";
    @Output()
    onKeypress = new EventEmitter<ITopologyItem[]>();
    @Input()
    Collection: ITopologyItem[];

    id: string = '';
    environmentPurpose: string = '';
    constructor() { }

    ngOnInit() { }

    OnId(event: any): void {
        console.log(event.target.value);
        this.id = event.target.value.toLowerCase();
        this.filter();
    }

    OnEnvironmentPurpose(event: any): void {
        console.log(event.target.value);
        this.environmentPurpose = event.target.value.toLowerCase();
        this.filter();
    }

    filter(): void {
        let list = this.Collection;
        if (this.id !== '') {
            list = list.filter(item => item.Id.toLowerCase().includes(this.id));
        }
        if (this.environmentPurpose !== '') {
            list = list.filter(item => item.EnvironmentPurpose.toLowerCase().includes(this.environmentPurpose));
        }
        this.onKeypress.emit(list);
    }
}