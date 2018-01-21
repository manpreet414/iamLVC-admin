import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import {BaseService} from "../services/base-service";

@Injectable()
export class ThemeService extends BaseService{

  constructor(
    private _router: Router,
    public http: Http){
      super(http, 'role');
  }
  getNotifs(params, language, url){
    const options = new Headers({ 'Authorization': localStorage.getItem('token'), 'language' : language, 'user_id' : params.user_id });
    const headers = new RequestOptions({ headers: options });
    return this.http.post(this.getUrl(url), params, headers)
    .toPromise().then(response => response.json());
  }
}
