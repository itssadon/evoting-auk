import { Component, OnInit } from '@angular/core';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { AspirantService } from '../../services/aspirant.service';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import * as $ from 'jquery';

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
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

        this.aspirateService.getAspirants().subscribe(data => {
            this.aspirants = data.aspirants;
        },
        err => {
            this.toasterService.pop('error', 'Oops!', err);
            return false;
        });
    }

}
