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
        var pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class="content"><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Please wait...</h3></div></div></div></div></div>';
        $('body').prepend(pageDimmer);

        if (this.authService.loggedIn()) {
          const userObj = JSON.parse(localStorage.user);
          const user_name = userObj.name;
          $('#user_name').text(user_name);
        }

        this.getAspirants();
    }

    getAspirants() {
        this.aspirateService.getAspirants().subscribe(
            data => {
                if (data.success) {
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

    removeAspirant(matricNo) {
        const pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class="content"><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Please wait...</h3></div></div></div></div></div>';
        $('body').prepend(pageDimmer);

        this.aspirateService.deleteAspirant(matricNo).subscribe(
            data => {
                if (data.success) {
                    this.toasterService.pop('success', 'Success!', data.message);
                } else {
                    this.toasterService.pop('info', 'Oops!', 'Aspirant could not be deleted at the moment.');
                }
                this.ngOnInit();
            },
            err => {
                this.toasterService.pop('error', 'Oops!', err);
                $('#pageDimmer').remove();
                return false;
            }
        );
    }

}
