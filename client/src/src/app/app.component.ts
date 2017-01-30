import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//import './rxjs-operators';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    title = 'My New Website';
    constructor() { }

    ngOnInit() { }
}