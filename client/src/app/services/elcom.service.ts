import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

@Injectable()
export class ElcomService {

  constructor(
        private http:Http
    ) { }

    getElcomOfficers() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/elcom', {headers: headers})
            .map(res => res.json());
    }
}
