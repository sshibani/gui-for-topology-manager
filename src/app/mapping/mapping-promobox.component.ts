import { Component, OnInit, Input } from '@angular/core';

import { Mapping } from './../shared/models/mapping';
@Component({
    moduleId: module.id,
    selector: 'mapping-promobox',
    styleUrls: [ 'mapping.component.css'],
    templateUrl: 'mapping-promobox.component.html'
})
export class MappingPromoboxComponent implements OnInit {
    @Input()
    Model: Mapping;
    constructor() { }

    ngOnInit() { }

}