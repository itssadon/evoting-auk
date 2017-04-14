import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AccreditationService {


    constructor(
        private http: Http,
    ) { }

    addStudent(student) {
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post('http://localhost:3000/students/student', student, {headers: headers}).map(res => res.json()).catch(err => err.toString());
    }

}
