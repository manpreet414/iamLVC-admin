import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Route } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeService } from './home.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  busy: Promise<any>;
  public user = { email: "", password: "" };
  public msg = '';
  public isForgotPassword: boolean = false;
  public emailNew: string;

  constructor(
    private _service: HomeService,
    private _router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    
  }

  

}
