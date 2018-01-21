import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-reset-password',
  providers: [LoginService],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  user: any = {};
  token: string = '';
  isStaffToken: boolean = false;
  error: string = '';
  busy: Promise<any>;
  passwordReset: boolean = false;

  constructor(
    public router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService ) { }

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      if(params['token']) {
        this.token = params['token'];
      }

      if(params['admin_token']) {
        this.isStaffToken = true;
        this.token = params['admin_token'];
      }

    });
  }

  resetPassword() {
    if(this.isStaffToken){
      this.emailToStaff();
    } else {
      this.emailToUser();
    }
  }

  emailToStaff() {
    this.busy = this.loginService.resetStaffPassword(this.token, this.user).then(
      (res: any) => {
        this.passwordReset = true;
      },
      (error) => {
        if(error.headers._headers.get('content-type')[0] == "application/json; charset=utf-8") {
          console.log(error.json().msg);
          this.error = error.json().msg;
        } else {
          this.error = 'Unable reset your password. Please try later.'
        }
      }
    );
  }


  emailToUser() {
    this.busy = this.loginService.resetPassword(this.token, this.user).then(
      (res: any) => {
        this.passwordReset = true;
      },
      (error) => {
        if(error.headers._headers.get('content-type')[0] == "application/json; charset=utf-8") {
          console.log(error.json().msg);
          this.error = error.json().msg;
        } else {
          this.error = 'Unable reset your password. Please try later.'
        }
      }
    );
  }

}
