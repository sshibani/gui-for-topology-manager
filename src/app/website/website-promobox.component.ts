import { Component, OnInit, Input } from '@angular/core';

import { Website } from './../shared/models/website';
@Component({
    moduleId: module.id,
    selector: 'website-promobox',
    styleUrls: [ 'website.component.css'],
    templateUrl: 'website-promobox.component.html'
})
export class WebsitePromoboxComponent implements OnInit {
    @Input("Model")
    model: Website;
    constructor() { }

    ngOnInit() { }

}