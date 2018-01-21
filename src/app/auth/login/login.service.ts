import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { BaseService } from "../../services/base-service";
import { environment } from '../../../environments/environment';

export class User {
  constructor(
    public email: string,
    public password: string) { }
}

@Injectable()
export class LoginService {
  rootUrl: string =   environment.config.BASE_URL;
  baseUrl: string =   environment.config.API_URL;

  constructor(private _router: Router, private http: Http) { }

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }

  login(user) {
    return this.http.post(`${this.baseUrl}login`, user)
                    .toPromise().then((res: Response) => res.json());
  }

  checkCredentials() {
    if (localStorage.getItem("user") === null) {
      this._router.navigate(['login']);
    }
  }

  forgetPassword(email) {
    let obj = { email: email }
    return this.http.post(this.baseUrl + 'forgotPassword/', obj)
                    .toPromise().then(response => response.json());
  }

  resetPassword(token, obj) {
    return this.http.post(this.baseUrl + 'reset/'+ token, obj)
                    .toPromise().then(response => response.json());
  }

  resetStaffPassword(token, obj) {
    return this.http.post(this.baseUrl + 'resetpassword/'+ token, obj)
                    .toPromise().then(response => response.json());
  }
}
