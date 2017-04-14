import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { AuthService } from '../../services/auth.service';
import { StudentService } from '../../services/student.service';
import { AccreditationService } from '../../services/accreditation.service';
import { MailService } from '../../services/mail.service';
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
        closingTime: '23:59'
    }

    constructor(
        private toasterService: ToasterService,
        private authService: AuthService,
        private router: Router,
        private studentService: StudentService,
        private accreditationService: AccreditationService,
        private mailService: MailService
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

        var hour = dateObj.getHours();
        var minute = dateObj.getMinutes();
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
                        $('#matricno').focus();
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
        this.studentService.getStudentRecord(matricno).subscribe(
            response => {
                if(response.content === 'Record not Found!') {
                    this.toasterService.pop('error', 'Oops!', response.content);
                    $('#picture').attr('src', '');
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
                                        this.toasterService.pop('success', 'Success', 'Student has been accredited.');
                                        $('#accreditationForm').trigger('reset');
                                        $('#submitBtn').addClass('disabled');
                                    } else {
                                        this.toasterService.pop('error', 'Oops!', 'Something went wrong');
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

    canBeAccredited(matricno) {
        //
    }

}
