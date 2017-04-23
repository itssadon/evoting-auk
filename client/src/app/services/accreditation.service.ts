import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

@Injectable()
export class AccreditationService {

    constructor(
        private http: Http,
        private authService: AuthService
    ) { }

    addStudent(student) {
        let headers = new Headers();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('students/student', student, {headers: headers}).map(res => res.json()).catch(err => err.toString());
    }

}
