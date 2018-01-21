import { EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import {constMessages} from './constant-messages';
export abstract class Listing extends constMessages {
  public searchTerm       = '';
  public rowsOnPage       = 10;
  public activePage       = 1;
  public itemsTotal       = null;
  public rowsInTable      = [10,25,50];
  public sortBy           = "name";
  public sortOrder        = "asc";


  public isAdmin         = localStorage.getItem('isAdmin') === 'true';
  public manageStaff     = false;
  public manageOrders    = false;
  public manageServices  = false;

  public filterParams = {
    page: "1",
    count: "100",
    sort: "created_date",
    type: ""
  };

  item: any = null;
  items: any = [];
  tmpItems: any = [];

  STATUS: any={
    confirm:"Confirmed",
    cancel:"Canceled by User",
    pending: "Pending",
    suggestion_by_user: "Changed by User",
    suggestion_by_admin: "Changed by Staff"
  }

  busy: Promise<any>;
  modalActions = new EventEmitter<string|MaterializeAction>();

  openModal(_item) {
    this.item = _item;
    this.modalActions.emit({action:"modal",params:['open']});
  }

  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

  public filterItems() {
    if(this.tmpItems.length == 0)
      this.tmpItems = this.items;
    this.items = this.tmpItems.filter(_item => _item.name.toLowerCase().lastIndexOf(this.searchTerm.trim().toLowerCase()) != -1)
  }

  public onPageChange(event) {
    this.rowsOnPage = event.rowsOnPage;
    this.activePage = event.activePage;
  }

  public searchEquipment(event) {
    // this.searchTerm = this.searchTerm.trimLeft();
    this.activePage = 1;
    this.filterItems();
  }

  public isAccessible() {
    return localStorage.getItem('isAdmin') === 'true'
  }


  objectSort(key, order='asc') {
    return function(a, b) {
      if(!a.hasOwnProperty(key) ||
      !b.hasOwnProperty(key)) {
        return 0;
      }

      const varA = (typeof a[key] === 'string') ?
      a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ?
      b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order == 'desc') ?
        (comparison * -1) : comparison
      );
    };
  }


  abstract getItems()
  abstract removeItem()
  abstract toggleStatus(_item)
}
