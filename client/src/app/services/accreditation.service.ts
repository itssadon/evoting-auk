import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { StudentService } from './student.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';

@Injectable()
export class AccreditationService {
    

    constructor(
        private http: Http,
        private studentService: StudentService
    ) { }

    isAccreditationTime() {

    }

}
