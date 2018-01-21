import { NgModule, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, RequestOptions, Headers } from '@angular/http';

import { BaseService } from "../services/base-service";

@Injectable()
export class DashboardService extends BaseService {

  constructor(
    private _router: Router,
    public http: Http) {
      super(http, 'dashboard');
  }
}
