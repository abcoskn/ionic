import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FunctionsProvider } from '../../providers/functions/functions';

/**
 * Generated class for the GreenProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-green-products',
  templateUrl: 'green-products.html',
})
export class GreenProductsPage {
items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public functions:FunctionsProvider) {
    this.functions.getGreenProducts().subscribe(response => {
      if(response.success!="false"){
        this.items=response;
      }
    });
  }

}
