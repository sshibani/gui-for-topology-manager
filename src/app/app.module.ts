import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { TabsModule, AccordionModule, CollapseModule, ButtonsModule, ModalModule, AlertModule   } from 'ng2-bootstrap';

import { AppRoutingModule } from './app.routing';
import { AppComponent }  from './app.component';

// Main section
import { MainComponent } from './main/main.component';

//Navigation
import { NavigationComponent } from './navigation/navigation.component';

import { EnvironmentComponent } from './environment/environment.component';
import { EnvironmentsOverviewComponent } from './environment/environments-overview.component';
import { EnvironmentPromoboxComponent } from './environment/environment-promobox.component';
import { WebsiteOverviewComponent } from './website/website-overview.component';
import { WebsitePromoboxComponent } from './website/website-promobox.component';
import { WebApplicationOverviewComponent } from './webapplication/webapplication-overview.component';
import { WebApplicationPromoboxComponent } from './webapplication/webapplication-promobox-component';
import { MappingOverviewComponent } from './mapping/mapping-overview.component';
import { MappingPromoboxComponent } from './mapping/mapping-promobox.component';
import { TopologyTypeOverviewComponent } from './topologytype/topologytype-overview.component';
import { TopologyTypePromoboxComponent } from './topologytype/topologytype-promobox.component';
import { TopologyTypeEditComponent } from './topologytype/topologytype-edit.component';

import { GoToDirective } from './shared/attribute-directives/goto-directive';
import { HighlightDirective } from './shared/attribute-directives/highlight-directive';

import { SearchComponent } from './shared/search/search.component';

import { EnvironmentEditComponent } from './environment/environment-edit.component';

import { DeleteWindowComponent } from './shared/popup/delete-window.component';

import { MessageComponent } from './shared/message/message.component';
import { MessageService } from './services/message.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule .forRoot()
  ],
  declarations: [
    HighlightDirective,
    GoToDirective,
    SearchComponent,
    AppComponent,
    MainComponent,
    NavigationComponent,
    EnvironmentsOverviewComponent,
    EnvironmentPromoboxComponent,
    EnvironmentEditComponent,
    EnvironmentComponent,
    WebsiteOverviewComponent,
    WebsitePromoboxComponent,
    WebApplicationOverviewComponent,
    WebApplicationPromoboxComponent,
    MappingOverviewComponent,
    MappingPromoboxComponent,
    TopologyTypeOverviewComponent,
    TopologyTypePromoboxComponent,
    TopologyTypeEditComponent,
    MessageComponent,
    DeleteWindowComponent
  ],
  providers: [
    MessageService
  ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
