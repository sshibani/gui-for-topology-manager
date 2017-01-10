import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';
import { AppComponent }  from './app.component';

// Main section
import { MainComponent } from './main/main.component';

//Navigation
import { NavigationComponent } from './navigation/navigation.component';

import { EnvironmentComponent } from './environment/environment.component';
import { EnvironmentsOverviewComponent } from './environment/environments-overview.component';
import { WebsiteOverviewComponent } from './website/website-overview.component';
import { WebsitePromoboxComponent } from './website/website-promobox.component';
import { WebApplicationOverviewComponent } from './webapplication/webapplication-overview.component';
import { WebApplicationPromoboxComponent } from './webapplication/webapplication-promobox-component';
import { MappingOverviewComponent } from './mapping/mapping-overview.component';
import { MappingPromoboxComponent } from './mapping/mapping-promobox.component';
import { HighlightDirective } from './shared/attribute-directives/highlight-directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    HighlightDirective,
    AppComponent,
    MainComponent,
    NavigationComponent,
    EnvironmentsOverviewComponent,
    EnvironmentComponent,
    WebsiteOverviewComponent,
    WebsitePromoboxComponent,
    WebApplicationOverviewComponent,
    WebApplicationPromoboxComponent,
    MappingOverviewComponent,
    MappingPromoboxComponent
  ],
  providers: [
  ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
