import { Injectable, EventEmitter, Output } from '@angular/core';
import { Headers, Response, Http } from '@angular/http';
import { CommonConst } from './../shared/constants';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Publication } from './../shared/models/publication';
import { MessageService } from './message.service';

@Injectable()
export class PublicationService {
    private _environmentUrl;
    private _headers;
    private _http: Http;
    private _messageService: MessageService;
    private _cacheResults: Publication[] = new Array<Publication>();
    constructor(http: Http) {
        this._http = http;
        //this._messageService = messageService;
        // this._environmentUrl = endPoint;
        this._environmentUrl = "data/Publications";
        this._headers = new Headers();
        // this._headers.append('Authorization', 'Basic ' + btoa('administrator:Tr1v1d3nt'));
        this._headers.append('Content-Type', 'application/json');
    }


    public GetAll(): Promise<Publication[]> {
        // if (this._cacheResults.length > 0) {
        //     return Promise.resolve(this._cacheResults);
        // }
        return this._http.get(this._environmentUrl, { headers: this._headers })
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
    }
    public Get(id: string): Promise<Publication> {
         return this.GetAll()
                    .then(env => env.find(e => e.Id === id));
    }

    extractData(res: Response) {
        console.warn(res.json());
        return res.json().value as Publication[];
        //return this._cacheResults;
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        //this._messageService.SendMessage("error", error.message, 5000);
        return Promise.reject(error.message || error);
    }
}