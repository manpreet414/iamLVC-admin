import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ThemeService } from './../theme.service';
import { SocketService } from './../../shared/socket.service';
import * as moment from 'moment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  messages = [];
  connection;
  message;
  items: any = [];
  name = localStorage.getItem('name');
  roleCode = localStorage.getItem('roleCode');

  constructor(
    private Themeservice: ThemeService,
    private socketService: SocketService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.allNotifications();
    this.connection = this.socketService.getMessages().subscribe(message => {
      console.log("Message reveiving...");
      this.messages.push(message);
      this.allNotifications();
      console.log("Message recieved!", this.message);
    })
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  sendMessage(){
    this.socketService.sendMessage(this.message);
    this.message = '';
  }

  allNotifications(){
    const filterParams = { "page": "1", "count": "10", "sort": "created_date",  "user_id": localStorage.getItem('userID')};
    this.Themeservice.getNotifs(filterParams, 'en', 'admin/notification').then((res) => {
      if(!res)
        return true;
      this.items = res.data;
    });
  }
  notification(item){
    this.router.navigate([`/${item.url}`]);
    this.Themeservice.updateItem(item._id, {_id:item._id}, 'en',  'admin/notification').then((res) => {
      if(!res)
        return true;
      this.router.navigate([`/${item.url}`]);
    });

  }

  formatDate(dateTime) {
    if (Math.abs(moment().diff(dateTime)) < 1000) {
      return 'just now';
    }
    return moment(dateTime).fromNow();
  }

}