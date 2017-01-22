import { Component, OnInit } from '@angular/core';

import { Mapping } from './../shared/models/mapping';
import { Publication } from './../shared/models/publication';
import { MappingService } from './../services/mapping.service';
import { ComponentEditBase } from './../shared/bases/componentedit-base';
import { WebApplicationService } from './../services/webapplication.service';
import { CmEnvironmentService } from './../services/cmenvironment.service';
import { PublicationService } from './../services/publication.service';

@Component({
    moduleId: module.id,
    selector: 'mapping-edit',
    styleUrls: [ "mapping.component.css" ],
    templateUrl: 'mapping-edit.component.html',
    providers: [ WebApplicationService, CmEnvironmentService, PublicationService ]
})
export class MappingEditComponent extends ComponentEditBase<Mapping> implements OnInit {
    availableWebApplications: string[];
    availableCmEnvironments: string[];
    publications: Publication[];
    constructor(service: MappingService,
                private webApplicationService: WebApplicationService,
                private cmEnvironmentService: CmEnvironmentService,
                private publicationService: PublicationService) {
        super(service);
    }

    ngOnInit() {
        if (this.model) {
            this.isNew = false;
            this.tabHeader = "Edit Mapping (" + this.model.Id + ")";
        } else {
            this.tabHeader = "Add Mapping";
            this.model = new Mapping();
            this.showIdField = true;
            this.isNew = true;
        }
        this.getWebApplications();
        this.getCmEnvironments();
        this.getPublications();
    }

     getWebApplications(): void {
        this.webApplicationService.getWebApplicationTitles()
                        .then(item => this.availableWebApplications = item);
        console.log(this.availableWebApplications);
    }

    getCmEnvironments(): void {
        this.cmEnvironmentService.getCmEnvrinmentsIds()
                    .then(a => this.availableCmEnvironments = a);
    }

    getPublications(): void {
        this.publicationService.GetAll()
                .then(p => this.publications = p);
    }

     onChange(id: any) {
       let publication = this.publications.find(p => p.Id === id);
       if (typeof publication.RelativeUrl !== 'undefined') {
           this.model.RelativeUrl = publication.RelativeUrl;
       }
    }
}