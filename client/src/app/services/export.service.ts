import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// models import
import { TopologyEnvironment } from './../shared/models/topologyenvironment';
import { CmEnvironment } from './../shared/models/cmenvironment';


// servives import
import { ContextService } from './context.service';
import { CmEnvironmentService } from './cmenvironment.service';
import { EnvironmentService } from './environment.service';
import { TopologyTypeService } from './topologytype.service';
import { WebsiteService } from './website.service';
import { WebApplicationService } from './webapplication.service';
import { MappingService } from './mapping.service';

@Injectable()
export class ExportService {
    output: string[] = [];
    constructor(private contextService: ContextService,
                private cmEnvironmentService: CmEnvironmentService,
                private cdEnvironmentService: EnvironmentService,
                private topologyTypeService: TopologyTypeService,
                private websiteService: WebsiteService,
                private webApplicationService: WebApplicationService,
                private mappingService: MappingService) { }

    export(data: TopologyEnvironment): void {
        this.contextService.setContextEnvironment(data);
        this.loadCmEnvironment();
    }

    private loadCmEnvironment() {
        this.cmEnvironmentService.GetAll()
                .subscribe(m => {
                    m.forEach(c => this.output.push('Add-ttmCm ' + c.Id));
                    this.loadTopologyTypes();
                });
    }

    private loadTopologyTypes() {
         this.topologyTypeService.GetAll()
                .subscribe(m => {
                    m.forEach(c => this.output.push('Add-topologytype ' + c.Id));
                    this.loadCdEnvironment();
                });
    }

    private loadCdEnvironment() {
        this.cdEnvironmentService.GetAll()
                .subscribe(m => {
                    m.forEach(c => this.output.push('Add-ttmCd ' + c.Id));
                    this.loadWebsites();
                });
    }

    private loadWebsites() {
        this.websiteService.GetAll()
                .subscribe(m => {
                    m.forEach(c => this.output.push('Add-ttmwebsite ' + c.Id));
                    this.loadWebApplications();
                });
    }

    private loadWebApplications() {
        this.webApplicationService.GetAll()
                .subscribe(m => {
                    m.forEach(c => this.output.push('Add-ttmwebApplication ' + c.Id));
                    this.loadMappings();
                });
    }

    private loadMappings() {
        this.mappingService.GetAll()
                .subscribe(m => {
                    m.forEach(c => this.output.push('Add-ttmMapping ' + c.Id));
                    this.downloadFile();
                });
    }

    downloadFile() {
        const data = this.output.join(';\r\n');
        const blob = new Blob(['\ufeff' + data], { type: 'text/ps1;charset=utf-8;' });
        const dwldLink = document.createElement('a');
        const url = URL.createObjectURL(blob);
        const isSafariBrowser = navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1;
        if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
            dwldLink.setAttribute('target', '_blank');
    }
        dwldLink.setAttribute('href', url);
        dwldLink.setAttribute('download', this.contextService.getContextEnvironment().Name + '.ps1');
        dwldLink.style.visibility = 'hidden';
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);
   }
}
