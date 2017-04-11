import { ErrorHandler, Injectable, Injector } from '@angular/core';

import { MessageService } from './../../services/message.service';

@Injectable()
export class GlobalExceptionHandler implements ErrorHandler {

  private messageService: MessageService;

  constructor(private injector: Injector) {
     this.messageService = injector.get(MessageService);
  }

  handleError(error) {
    this.messageService.SendMessage('danger', error, 10000);
  }

}
