import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { AuthService } from '../../services/auth.service';
import { ElcomService } from '../../services/elcom.service';
import { StudentService } from '../../services/student.service';
import { AccreditationService } from '../../services/accreditation.service';
import { MailService } from '../../services/mail.service';
import { SmsService } from '../../services/sms.service';
import * as $ from 'jquery';

@Component({
    selector: 'app-accreditation',
    templateUrl: './accreditation.component.html',
    styleUrls: ['./accreditation.component.css']
})
export class AccreditationComponent implements OnInit {
    isAccreditationTime: Boolean;
    message: any;
    student: any;

    public accreditationTime = {
        startingDay: '2017-04-02',
        closingDay: '2017-10-04',
        startingTime: '09:00',
        closingTime: '23:50'
    }

    constructor(
        private toasterService: ToasterService,
        private authService: AuthService,
        private router: Router,
        private elcomService: ElcomService,
        private studentService: StudentService,
        private accreditationService: AccreditationService,
        private mailService: MailService,
        private smsService: SmsService,
    ) { }

    ngOnInit() {
        var userObj = JSON.parse(localStorage.user);
        var user_name = userObj.name;
        $('#user_name').text(user_name);

        var dateObj = new Date();

        var month = '' + (dateObj.getUTCMonth() + 1); //months from 1-12
        if (month.length < 2) month = '0' + month;

        var day = '' + dateObj.getUTCDate();
        if (day.length < 2) day = '0' + day;

        var year = dateObj.getUTCFullYear();

        var todayDay = year + "-" + month + "-" + day;

        var hour = dateObj.getHours().toString();
        if(hour.length < 2) hour = '0' + hour;

        var minute = dateObj.getMinutes().toString();
        if(minute.length < 2) minute = '0' + minute;

        var todayTime = hour + ":" + minute;

        if(todayDay < this.accreditationTime.startingDay) {
            this.isAccreditationTime = false;
            this.message = 'Accreditation is not openned yet.';
        } else {
            if(todayDay > this.accreditationTime.closingDay) {
                this.isAccreditationTime = false;
                this.message = 'Accreditation day has passed.';
            } else {
                if(todayTime < this.accreditationTime.startingTime) {
                    this.isAccreditationTime = false;
                    this.message = 'It is not yet accreditation time.';
                } else {
                    if(todayTime > this.accreditationTime.closingTime) {
                        this.isAccreditationTime = false;
                        this.message = 'Accreditation time has elapsed.';
                    } else {
                        this.isAccreditationTime = true;
                        this.message = 'Accreditation is open.';
                        $('#matricno').trigger("focus");
                    }
                }
            }
        }
    }

    canAccredit() {
        return this.isAccreditationTime;
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
        // Check id student is an elcom officer first
        this.elcomService.getElcomOfficer(matricno).subscribe(
            response => {
                if(response.isElcom) {
                    this.toasterService.pop('error', 'Oops!', response.msg+ ' and cannot be accredited');
                    $('#searchBtn').removeClass("loading disabled");
                    return false;
                } else {
                    this.studentService.getStudentRecord(matricno).subscribe(
                        response => {
                            if(response.content === 'Record not Found!') {
                                this.toasterService.pop('error', 'Oops!', response.content);
                                $('#picture').attr('src', 'data:image/png;base64,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');
                                $('#accreditationForm').trigger('reset');
                                $('#submitBtn').addClass('disabled');
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

                                $('#picture').attr('src', 'https://atbu.edu.ng/'+response.content.picURL);
                                $('#firstname').val(firstname);
                                $('#middlename').val(middlename);
                                $('#lastname').val(lastname);
                                $('#email').val(email);
                                $('#phone').val(phone);
                                $('#department').val(department);
                                $('#course').val(course);

                                this.student = {
                                    matricno: matricno,
                                    studentName: response.content.studentName,
                                    email: email,
                                    phone: phone,
                                    department: department,
                                    course: course
                                }
                                $('#submitBtn').removeClass('disabled');
                                $('#searchBtn').removeClass("loading disabled");
                            }
                        },
                        error => {
                            this.toasterService.pop('error', 'Oops!', 'Search failed due to network/server error. Please try after a while');
                            $('#searchBtn').removeClass("loading disabled");
                        }
                    );
                }
            },
            error => {
                this.toasterService.pop('error', 'Oops!', 'Search failed due to network/server error. Please try after a while');
                $('#searchBtn').removeClass("loading disabled");
            }
        );

    }

    onAccreditSubmit() {
        var pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class="content"><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Accrediting student.<br><be>Please wait...</h3></div></div></div></div></div>';
        $('body').prepend(pageDimmer);

        this.accreditationService.addStudent(this.student).subscribe(response => {
            if(response.status) {
                const user = {
                    name: this.student.studentName,
                    username: this.student.matricno,
                    password: this.randomPasswordString(),
                    user_role: 2
                }
                // Add user
                this.authService.registerUser(user).subscribe(
                    data => {
                        if(data.success) {
                            // Send mail
                            const mailDetails = {
                                to: this.student.email,
                                subject: 'Accreditation Successful',
                                text: 'You have been accredited to vote. Here are your login detail. Username:'+this.student.matricno+', Password: '+user.password,
                                html: ''
                            }
                            this.mailService.sendMail(mailDetails).subscribe(
                                response => {
                                    if(response.success) {
                                        this.toasterService.pop('success', 'Success', 'Email has been sent.');
                                        const smsDetails = {
                                            recipient: this.student.phone,
                                            message: this.student.studentName+', you have been accredited to vote. Your Password is '+user.password+' to be used to login'
                                        }
                                        this.smsService.sendSMS(smsDetails).subscribe(
                                            response => {
                                                console.log(response);
                                                if(response) {
                                                    this.toasterService.pop('success', 'Success', 'Password has been sent to student\'s phone');
                                                    $('#accreditationForm').trigger('reset');
                                                    $('#submitBtn').addClass('disabled');
                                                } else {
                                                    this.toasterService.pop('error', 'Oops!', 'Could not send SMS');
                                                }
                                            },
                                            error => {
                                                this.toasterService.pop('error', 'Oops!', 'We just encountered a server error.');
                                            }
                                        );
                                    } else {
                                        this.toasterService.pop('error', 'Oops!', 'Could not send mail');
                                    }
                                },
                                error => {
                                    this.toasterService.pop('error', 'Oops!', 'We just encountered a server error.');
                                }
                            );
                        } else {
                            this.toasterService.pop('error', 'Oops!', 'Something went wrong');
                        }
                        $('#pageDimmer').remove();
                        //this.router.navigate(['/accreditation']);
                    }
                );
            } else {
                this.toasterService.pop('error', 'Oops!', 'Something went wrong');
                $('#pageDimmer').remove();
            }
        });
    }

    randomPasswordString() {
        var length = 8;
        var chars = '#aA!';
        var mask = '';
        if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
        if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (chars.indexOf('#') > -1) mask += '0123456789';
        if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
        var result = '';
        for (var i = length; i > 0; --i) result += mask[Math.round(Math.random() * (mask.length - 1))];
        return result;
    }

    testSMS() {
        this.smsService.checkBalance().subscribe(
            response => {
                this.toasterService.pop('success', 'Success', 'SMS Balance: '+response);
            },
            error => {
                this.toasterService.pop('error', 'Oops!', error);
            }
        );
    }

    testSendSMS() {
        const smsDetails = {
            recipient: '08060686834',
            message: 'Sadiq, you have been accredited to vote. Your Password is testPassword to be used to login.'
        }
        this.smsService.sendSMS(smsDetails).subscribe(
            response => {
                console.log(JSON.parse(response));
                this.toasterService.pop('success', 'Success', response);
            },
            error => {
                this.toasterService.pop('error', 'Oops!', error);
            }
        );
    }

}
