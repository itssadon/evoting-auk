import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { ApiService } from './api.service';

@Injectable()
export class AuthService {
    authToken: any;
    user: any;
    user_role: any;

    constructor(
        private http: Http,
        private apiService: ApiService
    ) { }

    registerUser(user) {
        let headers = new Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type','application/json');
        return this.http.post(this.apiService.getAPI()+'users/register', user, {headers: headers})
            .map(res => res.json());
    }

    authenticateUser(user) {
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post(this.apiService.getAPI()+'users/authenticate', user, {headers: headers})
            .map(res => res.json());
    }

    getProfile() {
        let headers = new Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.apiService.getAPI()+'users/profile', {headers: headers})
            .map(res => res.json());
    }

    storeUserData(token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }

    loadToken() {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }

    loggedIn() {
        //return tokenNotExpired();
        return tokenNotExpired('id_token');
    }

    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }

    canPerformTask(task) {
        var user = JSON.parse(localStorage.user);
        var user_role = user.user_role;
        if(task=='elcom' && user_role==0) return true;
        if(task=='password' && user_role==0) return true;
        if(task=='aspirants' && (user_role==0 || user_role==1)) return true;
        if(task=='accreditation' && user_role==1) return true;
        if(task=='reports' && (user_role==0 || user_role==1)) return true;
        if(task=='results' && (user_role==1 || user_role==2)) return true;
        if(task=='vote' && user_role==2) return true;
        if(task=='receipt' && user_role==2) return true;
    }

}
