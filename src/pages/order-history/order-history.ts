import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FunctionsProvider } from '../../providers/functions/functions';

/**
 * Generated class for the OrderHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-history',
  templateUrl: 'order-history.html',
})
export class OrderHistoryPage {
items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public functions:FunctionsProvider) {
    this.functions.getOrdersHistory().subscribe(response => {
      if(response.success!="false"){
        this.items=response;
        console.log(response);
      }
    });
  }


}
