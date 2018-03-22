import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the SelectaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selectaccount',
  templateUrl: 'selectaccount.html',
})
export class SelectaccountPage {
items:any;
account:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
    this.items=this.navParams.get("items");
  }

  complate(){
    for(var i=0;i<this.items.length;i++)
    {
      if(this.items[i]["CSTID"]==this.account)
      {
        window.localStorage.setItem("userid",this.items[i]["CSTID"]);
        window.localStorage.setItem("cardid",this.items[i]["TCARDCST"]);
        window.localStorage.setItem("name",this.items[i]["TNAMECST"]);
        window.localStorage.setItem("fname",this.items[i]["TFNAMCST"]);
        window.localStorage.setItem("point",this.items[i]["point"]);
        break;
      }
    }
    this.view.dismiss(true);
  }

}
