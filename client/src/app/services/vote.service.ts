import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';

@Injectable()
export class VoteService {

    constructor(
        private http: Http,
        private apiService: ApiService,
        private authService: AuthService
    ) { }

    getVoteStatus(matricno) {
        let headers = new Headers();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.apiService.getAPI()+'vote/status/'+matricno , {headers: headers}).map(res => res.json()).catch(err => err.toString());
    }

    saveVote(voteSlip) {
        let headers = new Headers();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.apiService.getAPI()+'vote', voteSlip, {headers: headers}).map(res => res.json()).catch(err => err.toString());
    }

}
