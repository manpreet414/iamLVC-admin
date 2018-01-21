import { Component, OnInit } from '@angular/core';
import { MaterializeDirective } from "angular2-materialize";

import { DashboardService } from "./dashboard.service";

import * as moment from 'moment';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  items;
  busy;

  isAdmin: any = false;
  language: any = 'en';

  constructor(
    private klassService: DashboardService) { }

  ngOnInit() { }

  formatDate(dateTime, time) {
    let date = dateTime.split('T')[0];
    if (time) {
      let time = dateTime.split('T')[1];
      return moment(date).format('MMM DD, YYYY') +' '+  moment(time, ["HH:mm:ss"]).format("hh:mm A");
    }else{
      return moment(date).format('MMM DD, YYYY')
    }
  }
}
