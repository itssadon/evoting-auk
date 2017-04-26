import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ApiService } from './api.service';

@Injectable()
export class MailService {

  constructor(
      private http: Http,
      private apiService: ApiService,
  ) { }

  sendMail(mailDetails) {
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      return this.http.post(this.apiService.getAPI()+'send', mailDetails, {headers: headers}).map(res => res.json()).catch(err => err.toString());
  }

}
