import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";



@Component({
  selector: 'app-sidebar',
  providers: [],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  language :any;
  modules: any = [];
  busy: Promise<any>;
  staticLinks: any = [];
  MiscellaneousDepartmentTypes = [];

  isAdmin: any = false;
  permissions: any;

  constructor(
  ) { }

  ngOnInit() {
    this.language = 'en';
    this.isAdmin = localStorage.getItem('isAdmin') === 'true';
    if(this.isAdmin){
      this.getAdminStaticLinks();
    }else{
      this.getCoachStaticLinks();
    }

    this.MiscellaneousDepartmentTypes = ['service_request', 'maintenance_request', 'link', 'sharing', 'reservation'];
  }

  getAdminStaticLinks() {
    this.staticLinks = [
      { name: 'Plan Management', icon: 'fa-line-chart',
          childs:[
            { name: 'Subscription Plans', link: '' },
            { name: 'Add New', link: '' }
          ]
      },
      { name: 'User Management', icon: 'fa-users',
          childs:[
            { name: 'Assigned', link: '' },
            { name: 'Unassigned', link: '' }
          ]
      },
      { name: 'Category Management', icon: 'fa-star',
          childs:[
            { name: 'Categories', link: '/category' },
            { name: 'Add New', link: '/category/new' }
          ]
      },
      { name: 'Questionnaire Management', icon: 'fa-quora',
          childs:[
            { name: 'Questionnaires', link: '' },
            { name: 'Add New', link: '' }
          ]
      },
      { name: 'Settings', icon: 'fa-gear',
          childs:[
            { name: 'Email', link: '', icon: 'fa-envelope' }
          ]
      },
      { name: 'Change Password', link: '/profile/change-password', icon: 'fa-unlock-alt' },
      { name: 'Logout', link: '/login', icon: 'fa-sign-in' },
    ];
  }

    getCoachStaticLinks() {
      this.staticLinks = [
        { name: 'User Management', icon: 'fa-users',
            childs:[
              { name: 'Assigned', link: '/clients' },
              { name: 'Unassigned', link: '#' },
              { name: 'Unsubscribed', link: '#' }
            ]
        },
        { name: 'Blog', link: '#', icon: 'fa-feed' },
        { name: 'Knowledge Base', link: '#', icon: 'fa-book' },
        { name: 'Change Password', link: '/profile/change-password', icon: 'fa-unlock-alt' },
        { name: 'Logout', link: '/login', icon: 'fa-sign-in' },
        ];
    }

}
