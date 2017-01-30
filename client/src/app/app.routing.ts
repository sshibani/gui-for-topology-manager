import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteConst } from './shared/constants';
import { MainComponent }      from './main/main.component';
import { EnvironmentSelectionComponent } from './environment-selection/environment-selection.component';

import { EnvironmentOverviewComponent } from './environment/environment-overview.component';
import { EnvironmentComponent } from './environment/environment.component';

import { WebsiteOverviewComponent } from './website/website-overview.component';
import { WebsiteComponent } from './website/website.component';

import { WebApplicationOverviewComponent } from './webapplication/webapplication-overview.component';
import { MappingOverviewComponent } from './mapping/mapping-overview.component';
import { TopologyTypeOverviewComponent } from './topologytype/topologytype-overview.component';
import { TopologyTypeComponent } from './topologytype/topologytype.component';


const appRoutes: Routes = [
    { path: '', redirectTo: RouteConst.EnvironmentSelectionPath, pathMatch: 'full' },
    { path: RouteConst.EnvironmentSelectionPath, component: EnvironmentSelectionComponent },
    { path: RouteConst.EnvironmentOverviewPath, component: EnvironmentOverviewComponent },
    { path: RouteConst.Environmentpath + '/:id', component: EnvironmentComponent },
    { path: RouteConst.WebsiteOverviewPath, component: WebsiteOverviewComponent },
    { path: RouteConst.WebsitePath + '/:id', component: WebsiteComponent },
    { path: RouteConst.WebApplicationOverviewPath, component: WebApplicationOverviewComponent },
    { path: RouteConst.MappingOverviewPath, component: MappingOverviewComponent },
    { path: RouteConst.TopologyTypeOverViewPath, component: TopologyTypeOverviewComponent },
    { path: RouteConst.TopologyTypePath + '/:id', component: TopologyTypeComponent },
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);