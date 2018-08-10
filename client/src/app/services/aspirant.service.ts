import {
  Injectable
} from '@angular/core';
import {
  Http,
  Headers
} from '@angular/http';
import {
  Observable
} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {
  AuthService
} from './auth.service';
import {
  ApiService
} from './api.service';

@Injectable()
export class AspirantService {

  constructor(
    private http: Http,
    private authService: AuthService,
    private apiService: ApiService
  ) {}

  getAspirants() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.apiService.getAPI() + 'aspirants', {
      headers: headers
    }).map(res => res.json()).catch(err => err.toString());
  }

  addAspirant(aspirant) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.apiService.getAPI() + 'aspirants/aspirant', aspirant, {
      headers: headers
    }).map(res => res.json()).catch(err => err.toString());
  }

  getAspirant(username) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log('ELCOM to add: ' + username);
    return this.http.get(this.apiService.getAPI() + 'aspirants/aspirant/' + username, {
      headers: headers
    }).map(res => res.json()).catch(err => err.toString());
  }

  getAspirantsByOffice(office) {
    const headers = new Headers();
    this.authService.loadToken();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.apiService.getAPI() + 'aspirants/office/' + office, {
      headers: headers
    }).map(res => res.json()).catch(err => err.toString());
  }

  deleteAspirant(matricno) {
    const headers = new Headers();
    this.authService.loadToken();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.delete(this.apiService.getAPI() + 'aspirants/aspirant/' + matricno, {
      headers: headers
    }).map(res => res.json()).catch(err => err.toString());
  }

}
