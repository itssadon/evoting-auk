import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { PaystackService } from '../../services/paystack.service';
import { StudentService } from '../../services/student.service';
import * as $ from 'jquery';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    aspirant: any;

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
        private paystackService: PaystackService,
        private studentService: StudentService
    ) { }

    ngOnInit() {
        //$('select.dropdown').dropdown();
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
                this.toasterService.pop('success', 'Success!', 'You are now registered and can log in');
                this.router.navigate(['/login']);
            } else {
                this.toasterService.pop('error', 'Oops!', 'Something went wrong');
                this.router.navigate(['/register']);
            }
        });
    }

    setOfficeAmount(event) {
        var office = event.target.value;
        var amount_words = null, amount = null;
        switch(office) {
            case "president":
            amount_words = "Ten thousand (N10,000)";
            amount = 1000000;
            break;
            case "vice_president":
            amount_words = "Six thousand (N6,000)";
            amount = 600000;
            break;
            case "sec_gen":
            amount_words = "Eight thousand (N6,000)";
            amount = 800000;
            break;
            case "asst_sec_gen":
            amount_words = "Five thousand (N5,000)";
            amount = 500000;
            break;
            case "fin_sec":
            amount_words = "Eight thousand (N8,000)";
            amount = 800000;
            break;
            case "auditor":
            amount_words = "Six thousand (N6,000)";
            amount = 600000;
            break;
            case "treasurer":
            amount_words = "Six thousand (N6,000)";
            amount = 600000;
            break;
            case "welfare_I":
            amount_words = "Five thousand (N5,000)";
            amount = 500000;
            break;
            case "welfare_II":
            amount_words = "Four thousand (N4,000)";
            amount = 400000;
            break;
            case "dir_of_socials":
            amount_words = "Six thousand (N6,000)";
            amount = 600000;
            break;
            case "pro_I":
            amount_words = "Five thousand (N5,000)";
            amount = 500000;
            break;
            case "pro_II":
            amount_words = "Four thousand (N4,000)";
            amount = 400000;
            break;
            case "provost":
            amount_words = "Six thousand (N6,000)";
            amount = 600000;
            break;
            case "sales_dir":
            amount_words = "Six thousand (N6,000)";
            amount = 600000;
            break;
            case "sports_dir":
            amount_words = "Six thousand (N6,000)";
            amount = 600000;
            break;
            case "dir_of_food":
            amount_words = "Six thousand (N6,000)";
            amount = 600000;
            break;

            default:
            amount_words = "Amount in words";
            amount = null;
            office = null;
            break;
        }
        $("#amount_words").val(amount_words);
        this.office = office;
        this.amount = amount;
    }

    triggerSearch(event) {
        if(event.which == 13) {
            event.preventDefault();
            $('#searchBtn').trigger("click");
        }
    }

    searchMatric() {
        $('#searchBtn').addClass("loading disabled");
        var matricno = $('#matricno').val().replace(/\//g, ".").toUpperCase();
        if(matricno === "" || matricno === null) {
            this.toasterService.pop('error', 'Oops!', 'Please enter your matric number');
            $('#matricno').focus();
            $('#searchBtn').removeClass("loading disabled");
            return false;
        }
        this.studentService.getStudentRecord(matricno).subscribe(
            response => {
                if(response.content === 'Record not Found!') {
                    this.toasterService.pop('error', 'Oops!', response.content);
                    $('#searchBtn').removeClass("loading disabled");
                } else {
                    var matricno = response.content.regNumber;
                    var studentName = response.content.studentName.split(" ");
                    var lastname = studentName[0];
                    var firstname = studentName[1];
                    if(studentName[2]) var middlename = studentName[2];
                    var email = response.content.email;
                    var phone = response.content.phoneNumber;
                    var department = response.content.deptName;
                    var course = response.content.optionName;
                    var office = this.office;
                    var amount = this.amount;
                    $('#firstname').val(firstname);
                    $('#middlename').val(middlename);
                    $('#lastname').val(lastname);
                    $('#email').val(email);
                    $('#phone').val(phone);
                    $('#department').val(department);
                    $('#course').val(course);

                    this.aspirant = {
                        matricno: matricno,
                        firstname: firstname,
                        lastname: lastname,
                        email: email,
                        phone: phone,
                        office: office,
                        amount: amount
                    }
                    $('#searchBtn').removeClass("loading disabled");
                }
            },
            error => {
                this.toasterService.pop('error', 'Oops!', 'Search failed due to server error. Please try after a while');
                $('#searchBtn').removeClass("loading disabled");
            }
        );
    }

    onPaySubmit() {
        var pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class="content"><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Please wait...</h3></div></div></div></div></div>';
        $('body').prepend(pageDimmer);

        // Required Fields
        if(!this.validateService.validatePayerDetails(this.aspirant)) {
            this.toasterService.pop('error', 'Oops!', 'Please fill in all fields');
            $('#pageDimmer').remove();
            return false;
        }

        // Validate Email
        if(!this.validateService.validateEmail(this.aspirant.email)) {
            this.toasterService.pop('error', 'Oops!', 'Please use a valid email');
            $('#pageDimmer').remove();
            return false;
        }

        // Paystack create customer
        const customer = {
            email: this.aspirant.email,
            first_name: this.aspirant.firstname,
            last_name: this.aspirant.lastname,
            phone: this.aspirant.phone,
            metadata: {
                matric_number: this.aspirant.matricno.toUpperCase()
            }
        };
        this.paystackService.createCustomer(customer).subscribe(response => {
            if(response.status) {
                // Paystack initialize transaction
                const dataString = {
                    reference: Date.now(),
                    amount: this.aspirant.amount,
                    email: this.aspirant.email,
                    callback_url: window.location.host + "/status",
                    metadata: {
                        custom_fields: [
                            {display_name: "Payment For", variable_name: "payment_purpose", value: "ATBU SUG Aspirant Form"},
                            {display_name: "Office Aspiring For", variable_name: "office", value: this.aspirant.office}
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
