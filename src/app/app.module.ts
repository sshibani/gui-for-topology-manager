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

import { EnvironmentService } from './services/environment.service';


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
    WebsiteOverviewComponent
  ],
  providers: [
    EnvironmentService
  ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
