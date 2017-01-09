import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteConst } from './shared/constants';
import { MainComponent }      from './main/main.component';
import { EnvironmentsOverviewComponent } from './environment/environments-overview.component';
import { EnvironmentComponent } from './environment/environment.component';
import { WebsiteOverviewComponent } from './website/website-overview.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: RouteConst.EnvironmentOverviewPath, component: EnvironmentsOverviewComponent },
    { path: RouteConst.Environmentpath + '/:id', component: EnvironmentComponent },
    { path: RouteConst.WebsiteOverviewPath, component: WebsiteOverviewComponent }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);