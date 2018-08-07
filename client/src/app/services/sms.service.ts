import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ApiService } from './api.service';

@Injectable()
export class SmsService {
    apiUrlCredentials = 'https://api.smartsmssolutions.com/smsapi.php?username=sadon12&password=LIacAnuclommIc2';

    constructor(
        private http: Http,
        private apiService: ApiService,
    ) { }

    sendSMS(smsDetails) {
        return this.http.post(this.apiService.getAPI() + 'messaging/sms/', smsDetails).map(res => res.json()).catch(err => err.toString());
    }

    checkBalance() {
        return this.http.get(this.apiService.getAPI() + '/messaging/sms/').map(res => res.json()).catch(err => err.toString());
    }

}
