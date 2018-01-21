import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";



@Component({
  selector: 'app-footer',
  providers: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  language :any;
  modules: any = [];

  isAdmin: any = false;

  constructor(
  ) { }

  ngOnInit() {
    this.language = 'en';
  }



}
