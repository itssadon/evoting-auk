import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

var secret = 'sk_test_1cb9868b1a74a0b1e81c3fbb377033cb06862b76';

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
