import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

    constructor() { }

    getAPI() {
        if(location.port === '4200') {
            return 'http://localhost:8080/';
        } else {
            return '';
        }
    }

}
