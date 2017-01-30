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
    title = "Search";
    operator: string = 'Middle';
    isCollapsed: boolean = true;
    isWebsite: boolean = false;

    @Output()
    onKeypress = new EventEmitter<ISearchItem[]>();
    @Input("Collection")
    collection: ISearchItem[];

    id: string = '';
    environmentPurpose: string = '';
    constructor() { }

    ngOnInit() {
        if (typeof this.collection !== 'undefined') {
            let item = this.collection[0];
            if (item instanceof Website) {
                this.isWebsite = true;
            }
        }
     }

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
        let list = this.collection;
        if (this.id !== '') {
            list = list.filter(item => item.Id.toLowerCase().includes(this.id));
        }
        if (this.environmentPurpose !== '') {
            list = list.filter(item => item.EnvironmentPurpose.toLowerCase().includes(this.environmentPurpose));
        }
        this.onKeypress.emit(list);
    }

    public collapsed(event:any):void {
        console.log(event);
    }

    public expanded(event:any):void {
        console.log(event);
    }
}