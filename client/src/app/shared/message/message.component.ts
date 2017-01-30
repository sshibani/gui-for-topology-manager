import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { MessageService } from './../../services/message.service';
import { Message } from './../models/message';

@Component({
    moduleId: module.id,
    selector: 'messages',
    templateUrl: 'message.component.html',
    providers : [ ]
})
export class MessageComponent implements OnDestroy {
    alerts: Message[] = new Array<Message>();
    subscription: Subscription;

    constructor(private service: MessageService) {
       this.subscription = this.service.GetMessage().subscribe(m => {
           console.log(m);
           this.alerts.push(m);
           console.log(this.alerts);
        });
    }

   ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
}