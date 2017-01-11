import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteConst } from './shared/constants';
import { MainComponent }      from './main/main.component';
import { EnvironmentsOverviewComponent } from './environment/environments-overview.component';
import { EnvironmentComponent } from './environment/environment.component';
import { WebsiteOverviewComponent } from './website/website-overview.component';
import { WebApplicationOverviewComponent } from './webapplication/webapplication-overview.component';
import { MappingOverviewComponent } from './mapping/mapping-overview.component';

const appRoutes: Routes = [
    { path: '', redirectTo: RouteConst.EnvironmentOverviewPath, pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: RouteConst.EnvironmentOverviewPath, component: EnvironmentsOverviewComponent },
    { path: RouteConst.Environmentpath + '/:id', component: EnvironmentComponent },
    { path: RouteConst.WebsiteOverviewPath, component: WebsiteOverviewComponent },
    { path: RouteConst.WebApplicationOverviewPath, component: WebApplicationOverviewComponent },
    { path: RouteConst.MappingOverviewPath, component: MappingOverviewComponent }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);