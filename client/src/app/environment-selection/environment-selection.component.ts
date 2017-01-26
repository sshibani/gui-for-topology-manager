import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'env-selection',
    styleUrls: [ 'environment-selection.component.css'],
    templateUrl: 'environment-selection.component.html',
    providers: [ ]
})
export class EnvironmentSelectionComponent implements OnInit {
    title = "Selection";


    constructor() { }

    ngOnInit() {}
}