import { Component, OnInit, AfterViewChecked, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { ExtensionProperties } from './../models/extensionproperties';
@Component({
    moduleId: module.id,
    selector: 'extension-properties',
    templateUrl: 'extensionproperties.component.html'
})
export class ExtensionPropertiesComponent implements OnInit, AfterViewChecked {
    availableKeys = ExtensionProperties.availableKeys;
    selectModel: string;
    @Input('Model')
    model: ExtensionProperties;
    @Output()
    onDelete = new EventEmitter<ExtensionProperties>();
    @ViewChild("nameInput")
    input: any;
    constructor() { }

    ngOnInit() {
        this.selectModel = this.availableKeys.find(e => e === this.model.Name);
        if (typeof this.selectModel === 'undefined') {
            this.selectModel = "custom";
        }
    }

    ngAfterViewChecked() {
         if (this.selectModel !== "custom") {
            this.input.nativeElement.style.visibility = "hidden";
        }
    }

    onChangeExtensionKeys(type: any): void {
        console.log(type);
        if (type === "custom") {
            this.input.nativeElement.style.visibility = "visible";
        } else {
            this.model.Name = type;
            this.input.nativeElement.style.visibility = "hidden";
        }
    }

    removeExtensionProperty(): void {
        this.onDelete.emit(this.model);
    }
}