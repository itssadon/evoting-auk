import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import * as $ from 'jquery';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(
        public authService: AuthService,
        private router: Router,
        private toasterService: ToasterService
    ) { }

    ngOnInit() {
    }

    triggerProceed(event) {
        if(event.which == 13) {
            event.preventDefault();
            $('#proceedBtn').trigger("click");
        }
    }

    proceed() {
        var payment_ref = $('#payment_ref').val();
        console.log('Payment: '+payment_ref);
        if(payment_ref === '' || payment_ref === null || isNaN(payment_ref) || !isFinite(payment_ref)) {
            this.toasterService.pop('error', 'Error', 'You have not supplied a valid payment reference number.');
            return false;
        }
        window.location.href = '/status?trxref='+payment_ref+'&reference='+payment_ref;
    }

}
