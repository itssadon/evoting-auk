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
    id: any;

    constructor(
        public authService: AuthService,
        private aspirateService: AspirantService,
        private toasterService: ToasterService,
        private apiService: ApiService
    ) { }

    ngOnInit() {
        var userObj = JSON.parse(localStorage.user);
        var user_name = userObj.name;
        $('#user_name').text(user_name);

        this.getAspirants();
        this.id = setInterval(() => { this.getAspirants(); }, 1000 * 10 * 1);
    }

    ngOnDestroy() {
        if (this.id) {
            clearInterval(this.id);
        }
    }

    getAspirants() {
        this.aspirateService.getAspirants().subscribe(
            data => {
                this.aspirants = data.aspirants;
                this.toasterService.pop("info", "", "Election results will be refreshed again in the next 10secs.")
            },
            err => {
                this.toasterService.pop('error', 'Oops!', err);
                return false;
            }
        );
    }

}
