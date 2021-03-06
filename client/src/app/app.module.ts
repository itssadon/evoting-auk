import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { AuthGuard } from './guards/auth.guard';
import { AspirantsComponent } from './components/aspirants/aspirants.component';
import { ElcomOfficersComponent } from './components/elcom-officers/elcom-officers.component';
import { ElectoralGuidelinesComponent } from './components/electoral-guidelines/electoral-guidelines.component';
import { ElcomService } from './services/elcom.service';
import { PaystackService } from './services/paystack.service';
import { StatusComponent } from './components/status/status.component';
import { StudentService } from './services/student.service';
import { AspirantService } from './services/aspirant.service';
import { AccreditationComponent } from './components/accreditation/accreditation.component';
import { AccreditationService } from './services/accreditation.service';
import { MailService } from './services/mail.service';
import { SmsService } from './services/sms.service';
import { ApiService } from './services/api.service';
import { VoteComponent } from './components/vote/vote.component';
import { ResultsComponent } from './components/results/results.component';
import { VoteService } from './services/vote.service';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'aspirants', component: AspirantsComponent},
    {path: 'elcom-officers', component: ElcomOfficersComponent},
    {path: 'electoral-guidelines', component: ElectoralGuidelinesComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'status', component: StatusComponent},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {path: 'accreditation', component: AccreditationComponent, canActivate: [AuthGuard]},
    {path: 'vote', component: VoteComponent, canActivate: [AuthGuard]},
    {path: 'results', component: ResultsComponent, canActivate: [AuthGuard]},
    {path: 'receipt', component: ReceiptComponent, canActivate: [AuthGuard]},
    {path: 'reports', component: ReportsComponent, canActivate: [AuthGuard]},
    {path: 'reset-password', component: ResetPasswordComponent, canActivate: [AuthGuard]}
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        HomeComponent,
        DashboardComponent,
        RegisterComponent,
        ProfileComponent,
        ElectoralGuidelinesComponent,
        ElcomOfficersComponent,
        AspirantsComponent,
        StatusComponent,
        AccreditationComponent,
        VoteComponent,
        ResultsComponent,
        ReceiptComponent,
        ReportsComponent,
        ResetPasswordComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        RouterModule.forRoot(appRoutes),
        ToasterModule
    ],
    providers: [
        ValidateService,
        AuthService,
        AuthGuard,
        ElcomService,
        PaystackService,
        StudentService,
        AspirantService,
        AccreditationService,
        MailService,
        SmsService,
        ApiService,
        VoteService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
