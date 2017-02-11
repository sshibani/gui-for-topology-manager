import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RouteConst } from './../shared/constants';
import { TopologyEnvironmentService } from './../services/topology-environment.service';
import { ContextService } from './../services/context.service';
import { TopologyEnvironment } from './../shared/models/topologyenvironment';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from './../services/message.service';

@Component({
    moduleId: module.id,
    selector: 'env-selection',
    styleUrls: [ 'environment-selection.component.css'],
    templateUrl: 'environment-selection.component.html',
    providers: [ TopologyEnvironmentService ]
})
export class EnvironmentSelectionComponent implements OnInit {
    title = "Selection";
    model: TopologyEnvironment[];

    private deleteSubscription: Subscription;
    private createSubscription: Subscription;

    //model: any;
    constructor(private topologyEnvironmentService: TopologyEnvironmentService,
                private contextService: ContextService,
                private router: Router,
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

        let link = ['/' + RouteConst.EnvironmentOverviewPath];
        this.router.navigate(link, { skipLocationChange: true });
    }

    public delete(data: TopologyEnvironment): void {
        this.topologyEnvironmentService.Delete(data);
    }

    showMessage(msgType: string, message: string): void {
        this.messageService.SendMessage(msgType, message, 5000);
    }

    private setSubscribers(): void {
        this.deleteSubscription = this.topologyEnvironmentService.GetDeletedMessage().subscribe(value => {
                                    console.log("del");
                                    this.showMessage('success', `TopologyItem with Id: ${value.Name} deleted.`);
                                    this.model = this.model.filter(item => item !== value);
                                });
        this.createSubscription = this.topologyEnvironmentService.GetCreateMessage().subscribe(value => {
                                console.log("update");
                                this.showMessage('success', `TopologyItem with Id: ${value.Name} created.`);
                                this.model.push(value);
                            });
    }
}