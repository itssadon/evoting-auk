import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { AuthService } from '../../services/auth.service';
import { MailService } from '../../services/mail.service';
import { AspirantService } from '../../services/aspirant.service';
import { ApiService } from '../../services/api.service';
import { VoteService } from '../../services/vote.service';
import { StudentService } from '../../services/student.service';
import * as $ from 'jquery';

@Component({
    selector: 'app-vote',
    templateUrl: './vote.component.html',
    styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
    isVotingTime: Boolean;
    voteStatus: Boolean;
    message: any;

    voteSlip = {
        matricno: String,
        president: String,
        vice_president: String,
        sec_gen: String,
        asst_sec_gen: String,
        fin_sec: String,
        auditor: String,
        treasurer: String,
        welfare_I: String,
        welfare_II: String,
        dir_of_socials: String,
        pro_I: String,
        pro_II: String,
        provost: String,
        sales_dir: String,
        sports_dir: String,
        dir_of_food: String,
    }

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
        votingDay: '2018-01-15',
        startingTime: '09:00',
        closingTime: '23:59'
    }

    constructor(
        private toasterService: ToasterService,
        public authService: AuthService,
        private router: Router,
        private mailService: MailService,
        private aspirantService: AspirantService,
        private apiService: ApiService,
        private voteService: VoteService,
        private studentService: StudentService
    ) { }

    ngOnInit() {
        var userObj = JSON.parse(localStorage.user);
        var user_name = userObj.name;
        this.voteSlip.matricno = userObj.username;
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
                        this.getVoteStatus();
                    }
                }
            }
        }
    }

    canVote() {
        return this.isVotingTime;
    }

    hasVoted() {
        if(!this.voteStatus) {
            this.showSlip();
        } else {
            $("#votingForm").html('<div class="ui message red"><p>You have already voted for the aspirants you wish.<br><br>Thank you for exercising your rights.</p></div>');
            $("#votingForm").append('<a href="/receipt" class="ui button large green">View/Download your vote slip</a> <a href="/results" class="ui button large blue">View Election results</a>');
        }
    }

    getVoteStatus() {
        var userObj = JSON.parse(localStorage.user);
        var matricno = userObj.username.replace(/\//g, "-");
        this.voteService.getVoteStatus(matricno).subscribe(
            response => {
                if(response.hasVoted) {
                    this.voteStatus = true;
                } else {
                    this.voteStatus = false;
                }
                this.hasVoted();
            },
            error => {
                this.toasterService.pop('error', 'Oops!', 'We just experienced a server error. Please refresh your browser');
            }
        );
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
        var pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class=""><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Sumbitting your vote slip.<br><br>Please wait...</h3></div></div></div></div></div>';
        $('body').prepend(pageDimmer);

        this.voteSlip = {
            matricno: this.voteSlip.matricno,
            president: this.voteSlip.president,
            vice_president: this.voteSlip.vice_president,
            sec_gen: this.voteSlip.sec_gen,
            asst_sec_gen: this.voteSlip.asst_sec_gen,
            fin_sec: this.voteSlip.fin_sec,
            auditor: this.voteSlip.auditor,
            treasurer: this.voteSlip.treasurer,
            welfare_I: this.voteSlip.welfare_I,
            welfare_II: this.voteSlip.welfare_II,
            dir_of_socials: this.voteSlip.dir_of_socials,
            pro_I: this.voteSlip.pro_I,
            pro_II: this.voteSlip.pro_II,
            provost: this.voteSlip.provost,
            sales_dir: this.voteSlip.sales_dir,
            sports_dir: this.voteSlip.sports_dir,
            dir_of_food: this.voteSlip.dir_of_food,
        }

        this.voteService.saveVote(this.voteSlip).subscribe(
            response => {
                if(response.success) {
                    this.toasterService.pop('success', 'Congratulations!', response.msg);
                    this.getVoteStatus();
                    $('#pageDimmer').remove();
                } else {
                    this.toasterService.pop('error', 'Oops!', response.msg);
                    $('#pageDimmer').remove();
                }
            },
            error => {
                this.toasterService.pop('error', 'Oops!', 'We just experienced a server error. Please refresh your browser');
                $('#pageDimmer').remove();
            }
        );
    }

    updateVoteStatus() {

    }

    voterSlip() {
        // TODO: Get voter's vote receipt
    }

}
