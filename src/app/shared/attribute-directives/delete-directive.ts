import { Directive, ElementRef, Input, Renderer, HostListener, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ITopologyItem } from './../models/contracts/itopologyitem';
import { IServiceBase } from './../../services/service-base.service';

@Directive({ selector: '[DeleteItem]' })
export class GoToDirective {
    constructor() {  }

    @Input('Delete') model: ITopologyItem;
    @Input('Service') service: IServiceBase<ITopologyItem>;
    @Output("ModelUpdate")
    modelUpdate = new EventEmitter<boolean>();

    @HostListener("click") onClick() {
        this.service.Delete(this.model)
            .then(a => this.modelUpdate.emit(a));
   }

}