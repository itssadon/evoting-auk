import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { ElcomService } from '../../services/elcom.service';
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
        private authService: AuthService,
        private toasterService: ToasterService,
        private elcomService: ElcomService
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

    onAddOfficerSubmit() {
        var pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class="content"><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Please wait...</h3></div></div></div></div></div>';
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
        this.authService.registerUser(user).subscribe(data => {
            if(data.success) {
                this.toasterService.pop('success', 'Success!', 'ELCOM officer registered and can log in');
            } else {
                this.toasterService.pop('error', 'Oops!', 'Something went wrong');
            }
            this.ngOnInit()
            this.router.navigate(['/elcom-officers']);
            $('#pageDimmer').remove();
        });
    }
}
