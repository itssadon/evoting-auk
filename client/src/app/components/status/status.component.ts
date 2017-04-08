import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../../services/validate.service';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { PaystackService } from '../../services/paystack.service';

import * as $ from 'jquery';

@Component({
    selector: 'app-status',
    templateUrl: './status.component.html',
    styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
    paymentStatus: Boolean;
    reference: String;
    aspirant: Object;

    constructor(
        private validateService: ValidateService,
        private toasterService: ToasterService,
        private router: Router,
        private paystackService: PaystackService
    ) { }

    ngOnInit() {
        this.reference = this.getUrlParameter(('reference' || 'trxref'));
        if(!this.reference) {
            this.toasterService.pop('error', 'Sorry!', 'You must pay for a position before you can proceed.');
            this.router.navigate(['/register']);
            return false;
        }
        this.verifyTransaction(this.reference);
    }

    getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    }

    verifyTransaction(reference) {
        this.paystackService.verifyTransaction(reference).subscribe(response => {
            if(response.status) {
                this.paymentStatus = true;
                $('#message_wrapper').html('<div class="ui icon success message"><i class="checkmark icon"></i><div class="content"><div class="header">'+response.message+'</div><p>Fill the form below.</p>');
                this.aspirant = {
                    matricno: response.data.customer.metadata.matric_number,
                    firstname: response.data.customer.firstname,
                    lastname: response.data.customer.lastname,
                    email: response.data.customer.email,
                    phone: response.data.customer.phone,
                    office: response.data.metadata.custom_fields[1].value,
                    reference: response.data.reference
                }
                this.populateAspirantForm(this.aspirant);
            } else {
                this.paymentStatus = false;
                this.toasterService.pop('error', 'Oops!', 'Something went wrong');
                this.router.navigate(['/register']);
            }
        });
    }

    getPaymentStatus() {
        return this.paymentStatus;
    }

    populateAspirantForm(aspirant) {
        //
    }

    showStep1() {
        $("#step2_content, #step3_content").addClass("hiddenContent");
        $("#step2, #step3").removeClass("active");
        $("#step1").addClass("active");
        $("#step1_content").removeClass("hiddenContent");
    }

    showStep2() {
        $("#step1_content, #step3_content").addClass("hiddenContent");
        $("#step1, #step3").removeClass("active");
        $("#step2").addClass("active");
        $("#step2_content").removeClass("hiddenContent");
    }

    showStep3() {
        $("#step1_content, #step2_content").addClass("hiddenContent");
        $("#step1, #step2").removeClass("active");
        $("#step3").addClass("active");
        $("#step3_content").removeClass("hiddenContent");
    }

}
