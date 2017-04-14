import { Component, OnInit } from '@angular/core';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { AspirantService } from '../../services/aspirant.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-aspirants',
  templateUrl: './aspirants.component.html',
  styleUrls: ['./aspirants.component.css']
})
export class AspirantsComponent implements OnInit {
    aspirants: any;

  constructor(
      private aspirateService: AspirantService,
      private toasterService: ToasterService
  ) { }

  ngOnInit() {
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
