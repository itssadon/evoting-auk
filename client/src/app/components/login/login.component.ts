import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToasterModule, ToasterService } from 'angular2-toaster';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username: String;
    password: String;

    constructor(
        private router: Router,
        private authService: AuthService,
        private toasterService: ToasterService
    ) { }

    ngOnInit() {
    }

    onLoginSubmit() {
        const user = {
            username: this.username,
            password: this.password
        }

        this.authService.authenticateUser(user).subscribe(data => {
            if(data.success) {
                this.authService.storeUserData(data.token, data.user);
                this.toasterService.pop('success', 'Successful!', 'You are now logged in');
                this.router.navigate(['/dashboard']);
            } else {
                this.toasterService.pop('error', 'Oops!', data.msg);
                this.router.navigate(['/login']);
            }
        });
    }
}
