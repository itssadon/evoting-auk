import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../../services/validate.service';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { PaystackService } from '../../services/paystack.service';
import { StudentService } from '../../services/student.service';

import * as $ from 'jquery';

@Component({
    selector: 'app-status',
    templateUrl: './status.component.html',
    styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
    paymentStatus: Boolean;
    reference: String;
    aspirant: any;

    constructor(
        private validateService: ValidateService,
        private toasterService: ToasterService,
        private router: Router,
        private paystackService: PaystackService,
        private studentService: StudentService
    ) { }

    ngOnInit() {
        this.reference = this.getUrlParameter(('reference' || 'trxref'));
        if(!this.reference) {
            this.paymentStatus = false;
            this.toasterService.pop('error', 'Sorry!', 'You must pay for a position before you can proceed.');
            this.router.navigate(['/register']);
            return false;
        }
        this.verifyTransaction();
    }

    getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),sURLVariables = sPageURL.split('&'),sParameterName,i;
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    }

    verifyTransaction() {
        this.paystackService.verifyTransaction(this.reference).subscribe(
            response => {
                if(response.status) {
                    this.paymentStatus = true;
                    $('#message_wrapper').html('<div class="ui icon success message"><i class="checkmark icon"></i><div class="content"><div class="header">'+response.message+'</div><p>Fill the empty fields in the form below.</p>');
                    this.aspirant = {
                        matricno: response.data.customer.metadata.matric_number,
                        email: response.data.customer.email,
                        phone: response.data.customer.phone,
                        office: response.data.metadata.custom_fields[1].value,
                        reference: response.data.reference
                    }
                    var pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class="content"><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Please wait...</h3></div></div></div></div></div>';
                    $('body').prepend(pageDimmer);
                    this.populateAspirantForm();
                } else {
                    this.paymentStatus = false;
                    this.toasterService.pop('error', 'Oops!', 'Something went wrong');
                    $('#pageDimmer').remove();
                    this.router.navigate(['/register']);
                }
            },
            error => {
                this.toasterService.pop('error', 'Oops!', 'We just experienced a server error. Please refresh your browser');
                $('#pageDimmer').remove();
                this.router.navigate(['/register']);
            });
    }

    getPaymentStatus() {
        return this.paymentStatus;
    }

    populateAspirantForm() {
        var matricno = this.aspirant.matricno.replace(/\//g, ".");
        this.studentService.getStudentRecord(matricno).subscribe(
            response => {
                console.log(response);
                if(response.content === 'Record not Found!') {
                    this.toasterService.pop('error', 'Oops!', response.content);
                } else {
                    console.log(response.content);
                    var matricno = response.content.regNumber;
                    var studentName = response.content.studentName.split(" ");
                    var lastname = studentName[0];
                    var firstname = studentName[1];
                    if(studentName[2]) var middlename = studentName[2];
                    var email = response.content.email;
                    var phone = response.content.phoneNumber;
                    var department = response.content.deptName;
                    var course = response.content.optionName;
                    var level = response.content.levelId;
                    var office = this.aspirant.office;
                    var amount = this.aspirant.amount;
                    $('#firstname').val(firstname);
                    $('#middlename').val(middlename);
                    $('#lastname').val(lastname);
                    $('#email').val(email);
                    $('#phone').val(phone);
                    $('#department').val(department);
                    $('#course').val(course);
                    $('#level').val(level);
                    $('#pageDimmer').remove();
                }
            },
            error => {
                this.toasterService.pop('error', 'Oops!', 'We just experienced a server error. Please refresh your browser');
                $('#pageDimmer').remove();
            }
        );
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
