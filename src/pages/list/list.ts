import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FunctionsProvider } from '../../providers/functions/functions';
import { SublistPage } from '../sublist/sublist';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public functions:FunctionsProvider) {
    this.functions.getCategories().subscribe(response => {
      if(response.success!="false"){
        this.items=response;
      }
    });
  }

  sublist(category,childs){
    if(childs.length>0)
      this.navCtrl.push(SublistPage,{category:category,items:childs});
  }

}
