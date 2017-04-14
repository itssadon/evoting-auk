import { Component, OnInit } from '@angular/core';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { AspirantService } from '../../services/aspirant.service';
import { AuthService } from '../../services/auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-aspirants',
  templateUrl: './aspirants.component.html',
  styleUrls: ['./aspirants.component.css']
})
export class AspirantsComponent implements OnInit {
    aspirants: any;

  constructor(
      private authService: AuthService,
      private aspirateService: AspirantService,
      private toasterService: ToasterService
  ) { }

  ngOnInit() {
      if(this.authService.loggedIn()) {
          var userObj = JSON.parse(localStorage.user);
          var user_name = userObj.name;
          $('#user_name').text(user_name);
      }

      this.aspirateService.getAspirants().subscribe(data => {
          this.aspirants = data.aspirants;
          console.log(data);
      },
      err => {
          this.toasterService.pop('error', 'Oops!', err);
          return false;
      });
  }

}
