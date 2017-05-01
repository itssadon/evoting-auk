import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { AuthService } from '../../services/auth.service';
import { MailService } from '../../services/mail.service';
import { AspirantService } from '../../services/aspirant.service';
import * as $ from 'jquery';

@Component({
    selector: 'app-vote',
    templateUrl: './vote.component.html',
    styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
    isVotingTime: Boolean;
    message: any;
    student: any;

    presidents: any;
    vice_presidents: any;
    sec_gens: any;
    asst_sec_gens: any;
    fin_secs: any;
    auditors: any;
    treasurers: any;
    welfare_Is: any;
    welfare_IIs: any;
    dir_of_socialss: any;
    pro_Is: any;
    pro_IIs: any;
    provosts: any;
    sales_dirs: any;
    sports_dirs: any;
    dir_of_foods: any;

    public votingTime = {
        votingDay: '2017-05-01',
        startingTime: '08:00',
        closingTime: '23:00'
    }

    constructor(
        private toasterService: ToasterService,
        public authService: AuthService,
        private router: Router,
        private mailService: MailService,
        private aspirantService: AspirantService
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

        if(todayDay < this.votingTime.votingDay) {
            this.isVotingTime = false;
            this.message = 'Voting is not openned yet.';
        } else {
            if(todayDay > this.votingTime.votingDay) {
                this.isVotingTime = false;
                this.message = 'Voting day has passed.';
            } else {
                if(todayTime < this.votingTime.startingTime) {
                    this.isVotingTime = false;
                    this.message = 'It is not yet voting time.';
                } else {
                    if(todayTime > this.votingTime.closingTime) {
                        this.isVotingTime = false;
                        this.message = 'Voting time has elapsed.';
                    } else {
                        this.isVotingTime = true;
                        this.message = 'Voting is open';
                        this.showSlip();
                    }
                }
            }
        }
    }

    canVote() {
        return this.isVotingTime;
    }

    getAspirantsByOffice(office) {
        this.aspirantService.getAspirantsByOffice(office).subscribe(
            response => {
                if(response.success) {
                    var aspirants = response.aspirants;
                    if(office === 'president') {
                        this.presidents = aspirants;
                    } else if(office === 'vice_president') {
                        this.vice_presidents = aspirants;
                    } else if(office === 'sec_gen') {
                        this.sec_gens = aspirants;
                    } else if(office === 'asst_sec_gen') {
                         this.asst_sec_gens = aspirants;
                    } else if(office === 'fin_sec') {
                        this.fin_secs = aspirants;
                    } else if(office === 'auditor') {
                        this.auditors = aspirants;
                    } else if(office === 'treasurer') {
                        this.treasurers = aspirants;
                    } else if(office === 'welfare_I') {
                        this.welfare_Is = aspirants;
                    } else if(office === 'welfare_II') {
                        this.welfare_IIs = aspirants;
                    } else if(office === 'dir_of_socials') {
                        this.dir_of_socialss = aspirants;
                    } else if(office === 'pro_I') {
                        this.pro_Is = aspirants;
                    } else if(office === 'pro_II') {
                        this.pro_IIs = aspirants;
                    } else if(office === 'provost') {
                        this.provosts = aspirants;
                    } else if(office === 'sales_dir') {
                        this.sales_dirs = aspirants;
                    } else if(office === 'sports_dir') {
                        this.sports_dirs = aspirants;
                    } else if(office === 'dir_of_food') {
                        this.dir_of_foods = aspirants;
                    } else {
                        this.toasterService.pop('error', 'Oops!', 'Office not available');
                    }
                } else {
                    console.log(response);
                    if(office === 'president') {
                        this.presidents = false;
                    } else if(office === 'vice_president') {
                        this.vice_presidents = false;
                    } else if(office === 'sec_gen') {
                        this.sec_gens = aspirants;
                    } else if(office === 'asst_sec_gen') {
                         this.asst_sec_gens = aspirants;
                    } else if(office === 'fin_sec') {
                        this.fin_secs = aspirants;
                    } else if(office === 'auditor') {
                        this.auditors = aspirants;
                    } else if(office === 'treasurer') {
                        this.treasurers = aspirants;
                    } else if(office === 'welfare_I') {
                        this.welfare_Is = aspirants;
                    } else if(office === 'welfare_II') {
                        this.welfare_IIs = aspirants;
                    } else if(office === 'dir_of_socials') {
                        this.dir_of_socialss = aspirants;
                    } else if(office === 'pro_I') {
                        this.pro_Is = aspirants;
                    } else if(office === 'pro_II') {
                        this.pro_IIs = aspirants;
                    } else if(office === 'provost') {
                        this.provosts = aspirants;
                    } else if(office === 'sales_dir') {
                        this.sales_dirs = aspirants;
                        console.log(aspirants);
                    } else if(office === 'sports_dir') {
                        this.sports_dirs = aspirants;
                    } else if(office === 'dir_of_food') {
                        this.dir_of_foods = aspirants;
                    }
                }
            },
            error => {
                this.toasterService.pop('error', 'Oops!', 'We just encountered a server error fetching aspirants.');
            }
        );
    }

    getCandidateInfo(matricno) {
        // TODO: Get candidate information
    }

    showSlip() {
        this.getAspirantsByOffice('president');
        this.getAspirantsByOffice('vice_president');
        this.getAspirantsByOffice('sec_gen');
        this.getAspirantsByOffice('asst_sec_gen');
        this.getAspirantsByOffice('fin_sec');
        this.getAspirantsByOffice('auditor');
        this.getAspirantsByOffice('treasurer');
        this.getAspirantsByOffice('welfare_I');
        this.getAspirantsByOffice('welfare_II');
        this.getAspirantsByOffice('dir_of_socials');
        this.getAspirantsByOffice('pro_I');
        this.getAspirantsByOffice('pro_II');
        this.getAspirantsByOffice('provost');
        this.getAspirantsByOffice('sales_dir');
        this.getAspirantsByOffice('sports_dir');
        this.getAspirantsByOffice('dir_of_food');
    }

    onVoteSubmit() {
        // TODO: Get vote selections and submit vote
    }

    voterSlip() {
        // TODO: Get voter's vote receipt
    }

}
