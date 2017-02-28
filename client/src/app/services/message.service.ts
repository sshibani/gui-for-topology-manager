import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { Message } from './../shared/models/message';

@Injectable()
export class MessageService {
    private subject = new Subject<Message>();


    constructor() {}

    public SendMessage(type: string, msg: string, timeOut: number) {
        let message = new Message(type, msg, timeOut);
        this.subject.next(message);
    }

    ClearMessage() {
        this.subject.next();
    }

    GetMessage(): Observable<Message> {
        return this.subject.asObservable();
    }
}
