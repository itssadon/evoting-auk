import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';
import { ApiService } from './api.service';

@Injectable()
export class StudentService {
    student: Object;
    apiUrl = 'http://api.fptb.edu.ng/student/';

    constructor(
        private http: Http,
        private apiService: ApiService,
    ) { }

    getStudentRecord(matricno) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.apiService.getAPI()+'students/student/'+matricno, {headers: headers}).map(this.extractData).catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    }

}
