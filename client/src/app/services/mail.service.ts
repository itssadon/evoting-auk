import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MailService {

  constructor(
      private http: Http
  ) { }

  sendMail(mailDetails) {
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      return this.http.post('send', mailDetails, {headers: headers}).map(res => res.json()).catch(err => err.toString());
  }

}
