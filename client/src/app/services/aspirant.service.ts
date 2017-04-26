import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ApiService } from './api.service';

@Injectable()
export class AspirantService {

    constructor(
        private http: Http,
        private apiService: ApiService,
    ) { }

    getAspirants() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.apiService.getAPI()+'aspirants', {headers: headers}).map(res => res.json()).catch(err => err.toString());
    }

    addAspirant(aspirant) {
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post(this.apiService.getAPI()+'aspirants/aspirant', aspirant, {headers: headers}).map(res => res.json()).catch(err => err.toString());
    }

    getAspirant(id) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.apiService.getAPI()+'aspirants/aspirant/'+id, {headers: headers}).map(res => res.json()).catch(err => err.toString());
    }

}
