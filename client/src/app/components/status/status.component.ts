import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../../services/validate.service';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { PaystackService } from '../../services/paystack.service';
import { StudentService } from '../../services/student.service';
import { AspirantService } from '../../services/aspirant.service';

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
    matricno: String;

    public aspirant_model = {
        matricno: '',
        firstname: '',
        middlename: '',
        lastname: '',
        nickname: '',
        address: '',
        cgpa: '',
        office: '',
        reason: '',
        picture: '',
        votes: 0,
    };
    path = '';
    public file_srcs: string[] = [];
    public debug_size_before: string[] = [];
    public debug_size_after: string[] = [];

    constructor(
        private validateService: ValidateService,
        private toasterService: ToasterService,
        private router: Router,
        private paystackService: PaystackService,
        private studentService: StudentService,
        private aspirantService: AspirantService,
        private changeDetectorRef: ChangeDetectorRef
    ) { }

    ngOnInit() {
        const script = document.createElement('script');
        script.innerText = "$('select.dropdown').dropdown();";
        $('body').append(script);

        this.reference = this.getUrlParameter(('reference' || 'trxref'));
        if (!this.reference) {
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
                    $('#message_wrapper').html('<div class="ui icon success message"><i class="checkmark icon"></i><div class="content"><div class="header">All done</div><p>We\'ve verified your transaction.</p></div></div>');
                    this.paymentStatus = true;
                    this.aspirant = {
                        matricno: response.data.customer.metadata.matric_number,
                        email: response.data.customer.email,
                        phone: response.data.customer.phone,
                        office: response.data.metadata.custom_fields[1].value,
                        reference: response.data.reference
                    }
                    var pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class="content"><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Preparing Form.<br><br>Please wait...</h3></div></div></div></div></div>';
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
            }
        );
    }

    getPaymentStatus() {
        return this.paymentStatus;
    }

    populateAspirantForm() {
        const matricno = this.aspirant.matricno.replace(/\//g, "-");
        this.studentService.getStudentRecord(matricno).subscribe(
            response => {
                if (response.student_info === 'Record not Found!') {
                    this.toasterService.pop('error', 'Oops!', response.student_info);
                } else {
                    const fullName = response.student_info.full_name;
                    const nameArray = fullName.split(' ');
                    let middlename = '';
                    if (nameArray[2]) {
                        middlename = nameArray[2];
                    }
                    this.matricno = this.aspirant_model.matricno = this.aspirant.matricno;
                    const lastname = this.aspirant_model.lastname = nameArray[0];
                    const firstname = this.aspirant_model.firstname = nameArray[1];
                    this.aspirant_model.middlename = middlename;
                    const email = response.student_info.email;
                    const department = 'COMPUTER & MATHEMATICS';
                    const course = 'COMP/MATH';
                    this.aspirant_model.office = this.aspirant.office;
                    $('#othernames').val(firstname + ' ' + middlename);
                    $('#lastname').val(lastname);
                    $('#email').val(email);
                    $('#phone').val();
                    $('#department').val(department);
                    $('#course').val(course);
                    $('#pageDimmer').remove();
                    $('#msg_grid').remove();
                    this.toasterService.pop('success', response.message, 'Please fill in all the empty fields in the form.');
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

    fileChange($event) {
        this.file_srcs = [];
        this.readFiles($event.target.files);
    }

    readFile(file, reader, callback) {
        reader.onload = () => {
            callback(reader.result);
            this.aspirant_model.picture = reader.result;
        }
        reader.readAsDataURL(file);
    }

    readFiles(files, index = 0) {
        // Create the file reader
        let reader = new FileReader();
        // If there is a file
        if(index in files) {
            // Start reading this file
            this.readFile(files[index], reader, (result) => {
                // Create an img element and add the image file data to it
                var img = document.createElement("img");
                img.src = result;
                // Send this img to the resize function (and wait for callback)
                this.resize(img, 250, 250, (resized_jpeg, before, after) => {
                    // For debugging (size in bytes before and after)
                    this.debug_size_before.push(before);
                    this.debug_size_after.push(after);
                    // Add the resized jpeg img source to a list for preview
                    // This is also the file you want to upload. (either as a
                    // base64 string or img.src = resized_jpeg if you prefer a file).
                    this.file_srcs.push(resized_jpeg);
                    // Read the next file;
                    this.readFiles(files, index+1);
                });
            });
        } else {
            // When all files are done This forces a change detection
            this.changeDetectorRef.detectChanges();
        }
    }

    resize(img, MAX_WIDTH:number, MAX_HEIGHT:number, callback) {
        // This will wait until the img is loaded before calling this function
        return img.onload = () => {
            // Get the images current width and height
            var width = img.width;
            var height = img.height;
            // Set the WxH to fit the Max values (but maintain proportions)
            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            } else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }
            // create a canvas object
            var canvas = document.createElement("canvas");
            // Set the canvas to the new calculated dimensions
            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0,  width, height);
            // Get this encoded as a jpeg
            // IMPORTANT: 'jpeg' NOT 'jpg'
            var dataUrl = canvas.toDataURL('image/jpeg');
            // callback with the results
            callback(dataUrl, img.src.length, dataUrl.length);
        };
    }

    enableSubmit() {
        var confirmStatus = $('#confirm').is(':checked');
        if (confirmStatus) {
            $("#submit_btn").removeClass("disabled");
        } else {
            $("#submit_btn").addClass("disabled");
        }
    }

    onAspirantSubmit() {
        var pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class="content"><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Submiting form...</h3></div></div></div></div></div>';
        $('body').prepend(pageDimmer);

        // Required Fields
        if(!this.validateService.validateAspirant(this.aspirant_model)) {
            this.toasterService.pop('error', 'Oops!', 'Please fill in all fields');
            $('#pageDimmer').remove();
            return false;
        }
        this.aspirantService.addAspirant(this.aspirant_model).subscribe(
            data => {
                if(data.success) {
                    this.toasterService.pop('success', 'Congratulations!', 'You are now registered as an aspirant');
                    $('#pageDimmer').remove();
                    this.router.navigate(['/aspirants']);
                } else {
                    this.toasterService.pop('error', 'Oops!', 'Something went wrong');
                    $('#pageDimmer').remove();
                }
            },
            function(error) {
                this.toasterService.pop('error', 'Oops!', error);
                $('#pageDimmer').remove();
                return false;
            }
        );
    }

}
