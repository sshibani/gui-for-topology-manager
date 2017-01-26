import { Injectable } from '@angular/core';

import { TopologyEnvironment } from './../shared/models/topologyenvironment';

@Injectable()
export class ContextService {
    private contextEnvironment: TopologyEnvironment;
    constructor() { }

    setContextEnvironment(data: TopologyEnvironment): void {
        this.contextEnvironment = data;
    }

    getContextEnvironment(): TopologyEnvironment {
        return this.contextEnvironment;
    }
}