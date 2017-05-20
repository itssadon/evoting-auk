import { Component, OnInit } from '@angular/core';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { AspirantService } from '../../services/aspirant.service';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import * as $ from 'jquery';

@Component({
    selector: 'app-aspirants',
    templateUrl: './aspirants.component.html',
    styleUrls: ['./aspirants.component.css']
})
export class AspirantsComponent implements OnInit {
    aspirants: any;

    constructor(
        public authService: AuthService,
        private aspirateService: AspirantService,
        private toasterService: ToasterService,
        private apiService: ApiService
    ) { }

    ngOnInit() {
        if(this.authService.loggedIn()) {
            var userObj = JSON.parse(localStorage.user);
            var user_name = userObj.name;
            $('#user_name').text(user_name);
        }
        var pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class="content"><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Please wait...</h3></div></div></div></div></div>';
        $('body').prepend(pageDimmer);        
        this.getAspirants();
    }

    getAspirants() {
        this.aspirateService.getAspirants().subscribe(
            data => {
                if(data.success) {
                    this.aspirants = data.aspirants;
                } else {
                    this.toasterService.pop('info', 'Oops!', 'There are no aspirants registered yet');
                }
            },
            err => {
                this.toasterService.pop('error', 'Oops!', err);
                return false;
            }
        );
        $('#pageDimmer').remove();
    }

}
