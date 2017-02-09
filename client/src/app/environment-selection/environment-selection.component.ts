import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RouteConst } from './../shared/constants';
import { TopologyEnvironmentService } from './../services/topology-environment.service';
import { ContextService } from './../services/context.service';
import { TopologyEnvironment } from './../shared/models/topologyenvironment';


@Component({
    moduleId: module.id,
    selector: 'env-selection',
    styleUrls: [ 'environment-selection.component.css'],
    templateUrl: 'environment-selection.component.html',
    providers: [ TopologyEnvironmentService ]
})
export class EnvironmentSelectionComponent implements OnInit {
    title = "Selection";
    //model: TopologyEnvironment[];
    model: any;
    constructor(private topologyEnvironmentService: TopologyEnvironmentService,
                private contextService: ContextService,
                private router: Router) { }

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
}