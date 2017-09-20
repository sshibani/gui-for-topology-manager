import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';


import { TabsModule, AccordionModule, CollapseModule, ButtonsModule, ModalModule, AlertModule   } from 'ng2-bootstrap';

import { AppRoutingModule } from './app.routing';
import { HasContextActivated, MessageService, ContextService } from './services';

import { GlobalExceptionHandler,
         HighlightDirective,
         SearchComponent,
         DeleteWindowComponent,
         ExtensionPropertiesComponent,
         MessageComponent } from './shared';

        // Main section
import { MainComponent } from './main';
// Navigation
import { NavigationComponent } from './navigation';

import { EnvironmentSelectionComponent,
        EnvrionemtSelectionEditComponent,
        EnvrionemtSelectionNavComponent } from './environment-selection';

import { CdEnvironmentComponent,
         CdEnvironmentOverviewComponent,
         CdEnvironmentPromoboxComponent,
         CdEnvironmentEditComponent } from './cdenvironment';

import { CmEnvironmentOverviewComponent,
         CmEnvironmentPromoboxComponent,
         CmEnvironmentEditComponent } from './cmenvironment';

import { WebsiteOverviewComponent,
         WebsitePromoboxComponent,
         WebsiteEditComponent,
         WebsiteComponent } from './website';

import { WebApplicationOverviewComponent,
         WebApplicationPromoboxComponent,
         WebApplicationEditComponent } from './webapplication';

import { MappingOverviewComponent,
         MappingPromoboxComponent,
         MappingEditComponent } from './mapping';


import { TopologyTypeOverviewComponent,
         TopologyTypePromoboxComponent,
         TopologyTypeEditComponent,
         TopologyTypeComponent } from './topologytype';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    RouterModule,
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  declarations: [
    HighlightDirective,
    EnvironmentSelectionComponent,
    EnvrionemtSelectionEditComponent,
    EnvrionemtSelectionNavComponent,
    SearchComponent,
    AppComponent,
    MainComponent,
    TopologyTypeOverviewComponent,
    TopologyTypePromoboxComponent,
    TopologyTypeEditComponent,
    TopologyTypeComponent,
    NavigationComponent,
    CmEnvironmentOverviewComponent,
    CmEnvironmentPromoboxComponent,
    CmEnvironmentEditComponent,
    CdEnvironmentOverviewComponent,
    CdEnvironmentPromoboxComponent,
    CdEnvironmentEditComponent,
    CdEnvironmentComponent,
    WebsiteOverviewComponent,
    WebsitePromoboxComponent,
    WebsiteEditComponent,
    WebsiteComponent,
    WebApplicationOverviewComponent,
    WebApplicationPromoboxComponent,
    WebApplicationEditComponent,
    MappingOverviewComponent,
    MappingPromoboxComponent,
    MappingEditComponent,
    MessageComponent,
    DeleteWindowComponent,
    ExtensionPropertiesComponent
  ],
  providers: [
    MessageService,
    ContextService,
    HasContextActivated,
    { provide: ErrorHandler, useClass: GlobalExceptionHandler}
  ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
