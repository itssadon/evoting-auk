import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { ElcomService } from '../../services/elcom.service';
import { StudentService } from '../../services/student.service';
import { AspirantService } from '../../services/aspirant.service';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import * as $ from 'jquery';

@Component({
    selector: 'app-elcom-officers',
    templateUrl: './elcom-officers.component.html',
    styleUrls: ['./elcom-officers.component.css']
})
export class ElcomOfficersComponent implements OnInit {
    username: String;
    name: String;
    password: String;

    users: any;

    constructor(
        private router: Router,
        private validateService: ValidateService,
        public authService: AuthService,
        private toasterService: ToasterService,
        private elcomService: ElcomService,
        private studentService: StudentService,
        private aspirantService: AspirantService
    ) { }

    ngOnInit() {
        this.elcomService.getElcomOfficers().subscribe(data => {
            this.users = data.users;
        },
        err => {
            console.log(err);
            return false;
        });
    }

    triggerSearch(event) {
        if(event.which == 13) {
            event.preventDefault();
            $('#searchBtn').trigger("click");
        }
    }

    searchMatric() {
        $('#searchBtn').addClass("loading disabled");
        var username = $('#username').val().replace(/\//g, ".").toUpperCase();
        if(username === "" || username === null) {
            this.toasterService.pop('error', 'Oops!', 'Please enter student\'s matric number');
            $('#username').focus();
            $('#searchBtn').removeClass("loading disabled");
            return false;
        }
        // Check id student is an elcom officer first
        this.aspirantService.getAspirant(username).subscribe(
            response => {
                if(response.isAspirant) {
                    this.toasterService.pop('error', 'Oops!', response.msg+ ' and cannot be an ELCOM member');
                    $('#searchBtn').removeClass("loading disabled");
                    return false;
                } else {
                    this.studentService.getStudentRecord(username).subscribe(
                        response => {
                            if(response.content === 'Record not Found!') {
                                this.toasterService.pop('error', 'Oops!', response.content);
                                $('#name').val('');
                                $('#searchBtn').removeClass("loading disabled");
                            } else {
                                var studentName = this.name = response.content.studentName;
                                $('#name').val(studentName);
                                $('#searchBtn').removeClass("loading disabled");
                            }
                        },
                        error => {
                            this.toasterService.pop('error', 'Oops!', 'Search failed due to server error. Please try after a while');
                            $('#name').val('');
                            $('#searchBtn').removeClass("loading disabled");
                        }
                    );
                }
            },
            error => {
                this.toasterService.pop('error', 'Oops!', 'Search failed due to network/server error. Please try after a while');
                $('#name').val('');
                $('#searchBtn').removeClass("loading disabled");
            }
        );
    }

    onAddOfficerSubmit() {
        var pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class="content"><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Adding ELCOM Officer.<br><br>Please wait...</h3></div></div></div></div></div>';
        $('body').prepend(pageDimmer);

        const user = {
            name: this.name,
            username: this.username,
            password: this.password,
            user_role: 1
        }

        // Required Fields
        if(!this.validateService.validateRegister(user)) {
            this.toasterService.pop('error', 'Oops!', 'Please fill in all fields');
            $('#pageDimmer').remove();
            return false;
        }

        // Register user
        this.authService.registerUser(user).subscribe(
            data => {
                if(data.success) {
                    this.toasterService.pop('success', 'Success!', 'ELCOM officer registered and can log in');
                } else {
                    this.toasterService.pop('error', 'Oops!', 'Something went wrong');
                }
                this.ngOnInit();
                $('#pageDimmer').remove();
                this.router.navigate(['/elcom-officers']);
            }
        );
    }

    deleteElcom(username) {
        var pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class="content"><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Deleting ELCOM Officer.<br><br>Please wait...</h3></div></div></div></div></div>';
        $('body').prepend(pageDimmer);

        username = username.replace(/\//g, ".").toUpperCase();
        if(username === null) {
            this.toasterService.pop('error', 'Oops!', 'Username not present');
            $('#pageDimmer').remove();
            return false;
        } else {
            this.elcomService.deleteElcomOfficer(username).subscribe(
                response => {
                    if(response.success) {
                        this.toasterService.pop('success', 'Success', 'ELCOM officer deleted');
                    } else {
                        this.toasterService.pop('error', 'Oops!', 'Something went wrong');
                    }
                    this.ngOnInit();
                    $('#pageDimmer').remove();
                    this.router.navigate(['/elcom-officers']);
                },
                error => {
                    this.toasterService.pop('error', 'Oops!', 'Deleting failed due to server error. Please try after a while');
                    $('#pageDimmer').remove();
                }
            );
        }
    }

}
