import { Injectable, EventEmitter, Output } from '@angular/core';
import { Headers, Response, Http } from '@angular/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';

import { Publication } from './../shared/models/publication';
import { MessageService } from './message.service';
import { ContextService } from './context.service';

@Injectable()
export class PublicationService {
    private _url;
    private _headers;
    private _http: Http;
    private _messageService: MessageService;

    private _observable: Observable<Publication[]>;
    constructor(http: Http, contextService: ContextService) {
        this._http = http;
        this._url = environment.localEndPoint + "Publication/" + contextService.getContextEnvironment().Id;
        this._headers = new Headers();
        this._headers.append('Content-Type', 'application/json');
    }


    public GetAll(): Observable<Publication[]> {
        if (this._observable) {
            return this._observable;
        } else {
            this._observable = this._http.get(this._url, { headers: this._headers, withCredentials: true })
                                            .map(this.extractData)
                                            .publishReplay(50)
                                            .refCount();
            return this._observable;
        }

    }
    public Get(id: string): Observable<Publication> {
         return this.GetAll()
                    .map(env => env.find(e => e.Id === id));
    }

    extractData(res: Response) {
        console.warn(res.json());
        return res.json() as Publication[];
        //return this._cacheResults;
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        //this._messageService.SendMessage("error", error.message, 5000);
        return Promise.reject(error.message || error);
    }
}