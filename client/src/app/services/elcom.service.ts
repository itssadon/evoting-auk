import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';

@Injectable()
export class ElcomService {

  constructor(
        private http: Http,
        private apiService: ApiService,
        private authService: AuthService
    ) { }

    getElcomOfficers() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.apiService.getAPI()+'users/elcom', {headers: headers}).map(res => res.json()).catch(err => err.toString());
    }

    getElcomOfficer(matricno) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.apiService.getAPI()+'users/elcom/'+matricno, {headers: headers}).map(res => res.json()).catch(err => err.toString());
    }

    deleteElcomOfficer(matricno) {
        let headers = new Headers();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.apiService.getAPI()+'users/elcom/'+matricno, {headers: headers}).map(res => res.json()).catch(err => err.toString());
    }
}
