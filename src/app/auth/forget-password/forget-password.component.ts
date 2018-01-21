import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
  providers: [LoginService]
})
export class ForgetPasswordComponent implements OnInit {
  userEmail: string = '';
  busy: Promise<any>;

  constructor(
    private _router: Router,
    private _service: LoginService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  sendEmail() {
    this.busy = this._service.forgetPassword(this.userEmail).then(
      (res: any) => {
        this.toastr.success("Reset password link has been sent to your registered email");
      },
      (error) => {
        if(error.headers._headers.get('content-type')[0] == "application/json; charset=utf-8") {
          this.toastr.error(error.json().msg);
        } else {
          this.toastr.error('Unable reset your password. Please try later.');
        }
      }
    );
  }

}
