import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ElcomService {

  constructor(
        private http: Http
    ) { }

    getElcomOfficers() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/elcom', {headers: headers}).map(res => res.json()).catch(err => err.toString());
    }

    getElcomOfficer(matricno) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/elcom/'+matricno, {headers: headers}).map(res => res.json()).catch(err => err.toString());
    }
}
