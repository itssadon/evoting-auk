import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

    constructor() { }

    validateRegister(user) {
        if(user.name == undefined || user.username == undefined || user.password == undefined) {
            return false;
        } else {
            return true;
        }
    }

    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    validatePayerDetails(aspirant) {
        if(aspirant.firstname==undefined || aspirant.lastname==undefined || aspirant.email==undefined || aspirant.phone==undefined || aspirant.office==undefined || aspirant.amount==undefined) {
            return false;
        } else {
            return true;
        }
    }

}
