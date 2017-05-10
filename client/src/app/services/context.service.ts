import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { TopologyEnvironment } from './../shared/models/topologyenvironment';

@Injectable()
export class ContextService {
    private subject = new Subject<TopologyEnvironment>();
    private contextEnvironment: TopologyEnvironment;
    constructor() { }

    setContextEnvironment(data: TopologyEnvironment): void {
        this.contextEnvironment = data;
        localStorage.setItem('environment', JSON.stringify(data));
        this.subject.next(data);
    }

    getContextEnvironment(): TopologyEnvironment {
        this.contextEnvironment = JSON.parse(localStorage.getItem('environment'));
        return this.contextEnvironment;
    }

    hasContext(): boolean {
        this.contextEnvironment = JSON.parse(localStorage.getItem('environment'));
        if (this.contextEnvironment) {
            return true;
        } else {
            return false;
        }
    }

    getCurrentEnvironment(): Observable<TopologyEnvironment> {
        return this.subject.asObservable();
    }
}
