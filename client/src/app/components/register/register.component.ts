import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { PaystackService } from '../../services/paystack.service';
import * as $ from 'jquery';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    name: String;
    username: String;
    email: String;
    password: String;

    matricno: String;
    firstname: String;
    lastname: String;
    phone: String;
    office: String;
    amount: Number;

    constructor(
        private validateService: ValidateService,
        private toasterService: ToasterService,
        private authService: AuthService,
        private router: Router,
        private paystackService: PaystackService
    ) { }

    ngOnInit() {
    }

    onRegisterSubmit() {
        const user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        }

        // Required Fields
        if(!this.validateService.validateRegister(user)) {
            this.toasterService.pop('error', 'Oops!', 'Please fill in all fields');
            return false;
        }

        // Validate Email
        if(!this.validateService.validateEmail(user.email)) {
            this.toasterService.pop('error', 'Oops!', 'Please use a valid email');
            return false;
        }

        // Register user
        this.authService.registerUser(user).subscribe(data => {
            if(data.success) {
                this.toasterService.pop('success', 'Oops!', 'You are now registered and can log in');
                this.router.navigate(['/login']);
            } else {
                this.toasterService.pop('error', 'Oops!', 'Something went wrong');
                this.router.navigate(['/register']);
            }
        });
    }

    setOfficeAmount(event) {
        var office = event.target.value;
        var amount_words, amount;
        switch(office) {
            case "president":
            amount_words = "Ten thousand naira (N10,000)";
            amount = 1000000;
            break;
            case "vice_president":
            amount_words = "Six thousand naira (N6,000)";
            amount = 600000;
            break;
            case "sec_gen":
            amount_words = "Eight thousand naira (N6,000)";
            amount = 800000;
            break;
            case "asst_sec_gen":
            amount_words = "Five thousand naira (N5,000)";
            amount = 500000;
            break;
            case "fin_sec":
            amount_words = "Eight thousand naira (N8,000)";
            amount = 800000;
            break;
            case "auditor":
            amount_words = "Six thousand naira (N6,000)";
            amount = 600000;
            break;
            case "treasurer":
            amount_words = "Six thousand naira (N6,000)";
            amount = 600000;
            break;
            case "welfare_I":
            amount_words = "Five thousand naira (N5,000)";
            amount = 500000;
            break;
            case "welfare_II":
            amount_words = "Four thousand naira (N4,000)";
            amount = 400000;
            break;
            case "dir_of_socials":
            amount_words = "Six thousand naira (N6,000)";
            amount = 600000;
            break;
            case "pro_I":
            amount_words = "Five thousand naira (N5,000)";
            amount = 500000;
            break;
            case "pro_II":
            amount_words = "Four thousand naira (N4,000)";
            amount = 400000;
            break;
            case "provost":
            amount_words = "Six thousand naira (N6,000)";
            amount = 600000;
            break;
            case "sales_dir":
            amount_words = "Six thousand naira (N6,000)";
            amount = 600000;
            break;
            case "sports_dir":
            amount_words = "Six thousand naira (N6,000)";
            amount = 600000;
            break;
            case "dir_of_food":
            amount_words = "Six thousand naira (N6,000)";
            amount = 600000;
            break;

            default:
            amount_words = "Amount in words";
            amount = "";
            break;
        }
        $("#amount_words").val(amount_words);
        this.amount = amount;
        this.office = office;
    }

    onPaySubmit() {
        var pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class="content"><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Please wait...</h3></div></div></div></div></div>';
        $('body').prepend(pageDimmer);

        const aspirant = {
            matricno: this.matricno,
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            phone: this.phone,
            office: this.office,
            amount: this.amount
        }

        // Required Fields
        if(!this.validateService.validatePayerDetails(aspirant)) {
            this.toasterService.pop('error', 'Oops!', 'Please fill in all fields');
            $('#pageDimmer').remove();
            return false;
        }

        // Validate Email
        if(!this.validateService.validateEmail(aspirant.email)) {
            this.toasterService.pop('error', 'Oops!', 'Please use a valid email');
            $('#pageDimmer').remove();
            return false;
        }

        // Paystack create customer
        this.paystackService.createCustomer(
            {
                email: aspirant.email,
                first_name: aspirant.firstname,
                last_name: aspirant.lastname,
                phone: aspirant.phone,
                metadata: {
                    matric_number: aspirant.matricno.toUpperCase()
                }
            }
        ).subscribe(response => {
            if(response.status) {
                const dataString = {
                    reference: Date.now(),
                    amount: aspirant.amount,
                    email: aspirant.email,
                    callback_url: window.location.host + "/status",
                    metadata: {
                        custom_fields: [
                            {display_name: "Payment For", variable_name: "payment_purpose", value: "ATBU SUG Aspirant Form"},
                            {display_name: "Office Aspiring For", variable_name: "office", value: aspirant.office}
                        ]
                    },
                    subaccount: "ACCT_h0ei6f30smsz0mg",
                    bearer: "subaccount"
                };
                this.paystackService.initializeTransaction(dataString).subscribe(response => {
                    if(response.status) {
                        this.toasterService.pop('success', 'Success!', 'Authorization URL created. Redirecting...');
                        window.location.href = response.data.authorization_url;
                    } else {
                        this.toasterService.pop('error', 'Oops!', 'Failed to initialize transaction');
                        this.router.navigate(['/register']);
                        $('#pageDimmer').remove();
                    }
                });
            } else {
                this.toasterService.pop('error', 'Oops!', 'Something went wrong');
                this.router.navigate(['/register']);
                $('#pageDimmer').remove();
            }
        });
    }

}
