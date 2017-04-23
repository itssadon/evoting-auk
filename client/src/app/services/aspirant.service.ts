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

  getAspirants() {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.get('aspirants', {headers: headers}).map(res => res.json()).catch(err => err.toString());
  }

  addAspirant(aspirant) {
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      return this.http.post('aspirants/aspirant', aspirant, {headers: headers}).map(res => res.json()).catch(err => err.toString());
  }

  getAspirant(id) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.get('aspirants/aspirant/'+id, {headers: headers}).map(res => res.json()).catch(err => err.toString());
  }

}
