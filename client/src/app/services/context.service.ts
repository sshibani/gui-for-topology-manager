import { Injectable } from '@angular/core';

import { TopologyEnvironment } from './../shared/models/topologyenvironment';

@Injectable()
export class ContextService {
    private contextEnvironment: TopologyEnvironment;
    constructor() { }

    setContextEnvironment(data: TopologyEnvironment): void {
        this.contextEnvironment = data;
        localStorage.setItem('environment', JSON.stringify(data));
    }

    getContextEnvironment(): TopologyEnvironment {
        this.contextEnvironment = JSON.parse(localStorage.getItem('environment'));
        return this.contextEnvironment;
    }

    hasContext(): boolean {
        this.contextEnvironment = JSON.parse(localStorage.getItem('environment'));
        if(this.contextEnvironment) {
            return true;
        } else {
            return false;
        }
    }
}
