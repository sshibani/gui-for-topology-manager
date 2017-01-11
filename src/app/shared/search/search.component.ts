import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'search',
    styleUrls: ['search.component.css'],
    templateUrl: 'search.component.html'
})
export class SearchComponent implements OnInit {
    @Input()
    public SearchCallback: Function;
    constructor() { }

    ngOnInit() { }
}