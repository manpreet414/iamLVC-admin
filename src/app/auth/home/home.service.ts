import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

//import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { BaseService } from "../../services/base-service";
import { environment } from '../../../environments/environment';


@Injectable()
export class HomeService {
  rootUrl: string =   environment.config.BASE_URL;
  baseUrl: string =   environment.config.API_URL;

  constructor(private _router: Router, private http: Http) { }

  home() {
    
  }
}
