import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ContextService } from './context.service';

@Injectable()
export class HasContextActivated implements CanActivate {

  constructor(private contextService: ContextService) {}

  canActivate() {
    return this.contextService.hasContext();
  }
}