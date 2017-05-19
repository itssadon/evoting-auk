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
    selector: 'app-reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

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
        var userObj = JSON.parse(localStorage.user);
        var user_name = userObj.name;
        $('#user_name').text(user_name);
    }

    downloadElcomReport() {
        // TODO: Write logic for downloading elcom members list
    }

    downloadAspirantsReport() {
        // TODO: Write logic for downloading aspirants details report
    }

    downloadAccreditationReport() {
        // TODO: Write logic for downloading accreditation report
    }

    downloadElectionResultsReport() {
        // TODO: Write logic for downloading election results
    }

}
