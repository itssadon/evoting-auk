import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

var secret = "sk_test_4936d3da62fa021d9a5864c28ab031ec6e5cbe78";
var live_secret = 'sk_live_2d3ca6a2fa4fcdb3e5dfdfb071748629c896fe43';

@Injectable()
export class PaystackService {
    data: any;

    constructor(
        private http: Http,
    ) { }

    createCustomer(data) {
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + secret);
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://api.paystack.co/customer', data, {headers: headers}).map(res => res.json()).catch(err => err.toString());
    }

    initializeTransaction(data) {
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + secret);
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://api.paystack.co/transaction/initialize', data, {headers: headers}).map(res => res.json()).catch(err => err.toString());
    }

    verifyTransaction(reference) {
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + secret);
        headers.append('Content-Type', 'application/json');
        return this.http.get('https://api.paystack.co/transaction/verify/'+reference, {headers: headers}).map(res => res.json()).catch(err => err.toString());
    }

}
