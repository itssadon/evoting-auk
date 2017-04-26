import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';
import { ApiService } from './api.service';

@Injectable()
export class AccreditationService {

    constructor(
        private http: Http,
        private authService: AuthService,
        private apiService: ApiService,
    ) { }

    addStudent(student) {
        let headers = new Headers();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.apiService.getAPI()+'students/student', student, {headers: headers}).map(res => res.json()).catch(err => err.toString());
    }

    countAccreditedStudents() {
        let headers = new Headers();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.apiService.getAPI()+'students/count', {headers: headers}).map(res => res.json()).catch(err => err.toString());
    }

}
