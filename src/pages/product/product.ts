import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FunctionsProvider } from '../../providers/functions/functions';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
data:any;
items:any;
productid:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public functions:FunctionsProvider) {
    var product=this.navParams.get("data");
    //var product="13189";
    if(product.length>5)
      this.productid=product.substr(product.length-6, 5);
    else
      this.productid=product;
    //this.functions.showAlert("İçerik",product,"Tamam");
  }


}
