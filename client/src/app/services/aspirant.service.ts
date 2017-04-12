import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AspirantService {

  constructor(
      private http: Http
  ) { }

  addAspirant(aspirant) {
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      return this.http.post('http://localhost:3000/aspirant/add', aspirant, {headers: headers}).map(res => res.json()).catch(err => err.toString());
  }

}
