import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToasterModule, ToasterService } from 'angular2-toaster';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(
        private router: Router,
        public authService: AuthService,
        private toasterService: ToasterService
    ) { }

    ngOnInit() {
        if(this.authService.loggedIn()) {
            var userObj = JSON.parse(localStorage.user);
            var user_name = userObj.name;
            $('#user_name').text(user_name);
        }
    }

    onLogoutClick() {
        this.authService.logout();
        this.toasterService.pop('success', 'Successful', 'You are now logged out');
        this.router.navigate(['/login']);
        return false;
    }

}
