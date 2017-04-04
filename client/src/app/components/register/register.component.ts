import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { ToasterModule, ToasterService } from 'angular2-toaster';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    name: String;
    username: String;
    email: String;
    password: String;

    constructor(
        private validateService: ValidateService,
        private toasterService: ToasterService,
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    onRegisterSubmit() {
        const user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        }

        // Required Fields
        if(!this.validateService.validateRegister(user)) {
            this.toasterService.pop('error', 'Oops!', 'Please fill in all fields');
            return false;
        }

        // Validate Email
        if(!this.validateService.validateEmail(user.email)) {
            this.toasterService.pop('error', 'Oops!', 'Please use a valid email');
            return false;
        }

        // Register user
        this.authService.registerUser(user).subscribe(data => {
            if(data.success) {
            this.toasterService.pop('success', 'Oops!', 'You are now registered and can log in');
                this.router.navigate(['/login']);
            } else {
            this.toasterService.pop('error', 'Oops!', 'Something went wrong');
                this.router.navigate(['/register']);
            }
        });
    }

}
