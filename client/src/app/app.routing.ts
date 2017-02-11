import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteConst } from './shared/constants';
import { HasContextActivated } from './services/has-context-environment';
import { MainComponent }      from './main/main.component';
import { EnvironmentSelectionComponent } from './environment-selection/environment-selection.component';

import { CdEnvironmentOverviewComponent } from './cdenvironment/cdenvironment-overview.component';
import { CdEnvironmentComponent } from './cdenvironment/cdenvironment.component';

import { CmEnvironmentOverviewComponent } from './cmenvironment/cmenvironment-overview.component';

import { WebsiteOverviewComponent } from './website/website-overview.component';
import { WebsiteComponent } from './website/website.component';

import { WebApplicationOverviewComponent } from './webapplication/webapplication-overview.component';
import { MappingOverviewComponent } from './mapping/mapping-overview.component';
import { TopologyTypeOverviewComponent } from './topologytype/topologytype-overview.component';
import { TopologyTypeComponent } from './topologytype/topologytype.component';


const appRoutes: Routes = [
    { path: '',  component: EnvironmentSelectionComponent, pathMatch: 'full' },
    { path: RouteConst.EnvironmentSelectionPath, component: EnvironmentSelectionComponent },
    { path: RouteConst.CmEnvironmentOverviewPath, component: CmEnvironmentOverviewComponent, canActivate: [ HasContextActivated ] },
    { path: RouteConst.EnvironmentOverviewPath, component: CdEnvironmentOverviewComponent, canActivate: [ HasContextActivated ] },
    { path: RouteConst.Environmentpath + '/:id', component: CdEnvironmentComponent, canActivate: [ HasContextActivated ] },
    { path: RouteConst.WebsiteOverviewPath, component: WebsiteOverviewComponent, canActivate: [ HasContextActivated ] },
    { path: RouteConst.WebsitePath + '/:id', component: WebsiteComponent, canActivate: [ HasContextActivated ] },
    { path: RouteConst.WebApplicationOverviewPath, component: WebApplicationOverviewComponent, canActivate: [ HasContextActivated ] },
    { path: RouteConst.MappingOverviewPath, component: MappingOverviewComponent, canActivate: [ HasContextActivated ] },
    { path: RouteConst.TopologyTypeOverViewPath, component: TopologyTypeOverviewComponent, canActivate: [ HasContextActivated ] },
    { path: RouteConst.TopologyTypePath + '/:id', component: TopologyTypeComponent, canActivate: [ HasContextActivated ] },
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);