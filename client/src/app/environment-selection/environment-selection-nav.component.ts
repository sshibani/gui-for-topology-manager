import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ContextService } from './../services/context.service';
import { NavigationItem } from './../shared/models/navigationitem';
import { TopologyEnvironment } from './../shared/models/topologyenvironment';

import { RouteConst } from './../shared/constants';

@Component({
    moduleId: module.id,
    selector: 'env-select-nav',
    styles: [  ],
    templateUrl: 'environment-selection-nav.component.html',
    providers: [  ]
})
export class EnvrionemtSelectionNavComponent implements OnInit {
    currentEnvironment: string;
    navItem: NavigationItem;
    subscription: Subscription;

    constructor(private contextService: ContextService) {
         this.subscription = this.contextService.getCurrentEnvironment().subscribe(m => {
           console.log(m);
           this.currentEnvironment = m.Name;
        });
    }

    ngOnInit() {
        this.navItem = new NavigationItem('Select Environment', RouteConst.EnvironmentSelectionPath);
        if (this.contextService.hasContext()) {
           this.currentEnvironment = this.contextService.getContextEnvironment().Name;
        } else {
            this.currentEnvironment = '';
        }
     }
}
