import { ViewChild } from '@angular/core';
import {constMessages} from './constant-messages';
export abstract class BaseForm extends constMessages {
  itemID = null;
  item: any = {};
  isEditable: boolean = false;
  busy: Promise<any>;

  launguages = [
    {'name':'English', 'id' : 'en'},
    {'name':'Spanish', 'id' : 'es'},
    {'name':'Portuguese', 'id' : 'pt'}
  ];
  STATUS: any={
    confirm:"Confirmed",
    cancel:"Canceled by User",
    pending: "Pending",
    suggestion_by_user: "Changed by User",
    suggestion_by_admin: "Changed by Staff"
  }

  @ViewChild('mainForm') form;

  save() {
    if(this.itemID)
      this.updateItem();
    else
      this.createItem();
  }

  markDirty() {
    this.form.form.markAsDirty();
    this.form.form.markAsTouched();
  }

  abstract getItem();
  abstract createItem();
  abstract updateItem();
}
