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
                this.aspirants.forEach(element => {
                    switch (element.office) {
                        case 'president':
                            element.office = 'President';
                            break;
                        case 'sec_gen':
                            element.office = 'Sectretary General';
                            break;
                        case 'vice_president_I':
                            element.office = 'Vice President I';
                            break;
                        case 'fin_sec':
                            element.office = 'Financial Secretary';
                            break;
                        case 'auditor':
                            element.office = 'Auditor General';
                            break;
                        case 'treasurer':
                            element.office = 'Treasurer';
                            break;
                        case 'software':
                            element.office = 'Software Director';
                            break;
                        case 'pro_I':
                            element.office = 'Public Relation Officer I';
                            break;
                        case 'liason':
                            element.office = 'Liason Officer';
                            break;
                        case 'sports_dir':
                            element.office = 'Sports Director';
                            break;
                        case 'vice_president_II':
                            element.office = 'Vice President II';
                            break;
                        case 'asst_sec_gen':
                            element.office = 'Asst. Secretary General';
                            break;
                        case 'dir_of_socials':
                            element.office = 'Director of Socials';
                            break;
                        case 'dir_of_business':
                            element.office = 'Business Director';
                            break;
                        case 'welfare':
                            element.office = 'Welfare Director';
                            break;
                        case 'dir_of_program':
                            element.office = 'Program Director';
                            break;
                        case 'dir_of_library':
                            element.office = 'Library Director';
                            break;
                        case 'asst_welfare':
                            element.office = 'Asst. Welfare Director';
                            break;
                        case 'asst_sport':
                            element.office = 'Asst. Sports Director';
                            break;
                        case 'pro_II':
                            element.office = 'Public Relation Officer II';
                            break;
                        default:
                            break;
                    }
                });
                this.toasterService.pop('info', '', 'Election results will be refreshed again in the next 10secs.');
            },
            err => {
                this.toasterService.pop('error', 'Oops!', err);
                return false;
            }
        );
    }

}
