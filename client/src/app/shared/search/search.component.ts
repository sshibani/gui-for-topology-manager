import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ISearchItem } from './../models/contracts/itopologyitem';
import { Website } from './../models/website';

@Component({
    moduleId: module.id,
    selector: 'search',
    styleUrls: ['search.component.css'],
    templateUrl: 'search.component.html'
})
export class SearchComponent implements OnInit {
    title = 'Search';
    operator = 'Middle';
    isCollapsed = true;
    isWebsite = false;

    @Output()
    onKeypress = new EventEmitter<ISearchItem[]>();
    @Input('Collection')
    collection: ISearchItem[];

    id = '';
    environmentPurpose = '';
    constructor() { }

    ngOnInit() { }

     OnSearch(event: any): void {
        const list = this.collection;
        const s = event.target.value.toLowerCase();
        console.log(s);
        const result = this.collection.filter(function(o) {
            return Object.keys(o).some(function(k) {
                return o[k].toString().toLowerCase().indexOf(s) !== -1;
            });
        });
        this.onKeypress.emit(result);
     }

    public collapsed(event: any): void {
        console.log(event);
    }

    public expanded(event: any): void {
        console.log(event);
    }
}
