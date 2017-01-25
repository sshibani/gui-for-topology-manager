import { Component, OnInit } from '@angular/core';

import { NavigationItem } from './../shared/models/navigationitem';
import { RouteConst } from './../shared/constants';


@Component({
    moduleId: module.id,
    selector: 'nav-container',
    templateUrl: 'navigation.component.html'
})
export class NavigationComponent implements OnInit {
    navItems: NavigationItem[];
    constructor() { }

    ngOnInit() {
        this.getNavItems();
    }

    getNavItems(): void {
       this.navItems = NavigationItem[2] = [
            new NavigationItem("Home", "main"),
            new NavigationItem("Environments", RouteConst.EnvironmentOverviewPath),
            new NavigationItem("Websites", RouteConst.WebsiteOverviewPath),
            new NavigationItem("WebApplications", RouteConst.WebApplicationOverviewPath),
            new NavigationItem("Mappings", RouteConst.MappingOverviewPath),
            new NavigationItem("Topology Types", RouteConst.TopologyTypeOverViewPath)
        ];
    }
}