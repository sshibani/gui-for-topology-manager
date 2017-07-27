import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RouteConst } from './../shared/constants';
import { TopologyEnvironmentService } from './../services/topology-environment.service';
import { ContextService } from './../services/context.service';
import { TopologyEnvironment } from './../shared/models/topologyenvironment';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from './../services/message.service';
import { ExportService } from './../services/export.service';
// Services
import { CmEnvironmentService } from './../services/cmenvironment.service';
import { TopologyTypeService } from './../services/topologytype.service';
import { EnvironmentService } from './../services/environment.service';
import { WebsiteService } from './../services/website.service';
import { WebApplicationService } from './../services/webapplication.service';
import { MappingService } from './../services/mapping.service';

@Component({
    moduleId: module.id,
    selector: 'env-selection',
    styleUrls: [ 'environment-selection.component.css'],
    templateUrl: 'environment-selection.component.html',
    providers: [ TopologyEnvironmentService,
                 ExportService,
                 CmEnvironmentService,
                 EnvironmentService,
                 TopologyTypeService,
                 WebsiteService,
                 WebApplicationService,
                 MappingService ]
})
export class EnvironmentSelectionComponent implements OnInit {
    title = 'Select an environment';
    model: TopologyEnvironment[];

    private deleteSubscription: Subscription;
    private createSubscription: Subscription;

    constructor(private topologyEnvironmentService: TopologyEnvironmentService,
                private contextService: ContextService,
                private router: Router,
                private exportService: ExportService,
                private messageService: MessageService) {
                     this.setSubscribers();
                 }

    ngOnInit() {
      this.getEnvironments();
    }
    getEnvironments(): void {
        this.topologyEnvironmentService.GetAll()
                .subscribe(item => this.model = item);
    }
    setCurrentEnvironment(data: TopologyEnvironment): void {
        console.log(data);
        this.contextService.setContextEnvironment(data);

        const link = ['/' + RouteConst.EnvironmentOverviewPath];
        this.router.navigate(link, { skipLocationChange: true });
    }

    exportEnvironment(data: TopologyEnvironment): void {
        console.log('export ' + data.Name);
        this.exportService.export(data);
    }

    public delete(data: TopologyEnvironment): void {
        this.topologyEnvironmentService.Delete(data);
    }

    showMessage(msgType: string, message: string): void {
        this.messageService.SendMessage(msgType, message, 5000);
    }

    private setSubscribers(): void {
        this.deleteSubscription = this.topologyEnvironmentService.GetDeletedMessage().subscribe(value => {
                                    console.log('del');
                                    this.showMessage('success', `TopologyItem with Id: ${value.Name} deleted.`);
                                    this.model = this.model.filter(item => item !== value);
                                });
        this.createSubscription = this.topologyEnvironmentService.GetCreateMessage().subscribe(value => {
                                console.log('update');
                                this.showMessage('success', `TopologyItem with Id: ${value.Name} created.`);
                                this.model.push(value);
                            });
    }
}
