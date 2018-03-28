import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SublistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sublist',
  templateUrl: 'sublist.html',
})
export class SublistPage {
items:any;
category:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.category=this.navParams.get("category");
    this.items=this.navParams.get("items");
  }

  
  sublist(category,childs){
    if(childs.length>0)
      this.navCtrl.push(SublistPage,{category:category,items:childs});
  }

}
