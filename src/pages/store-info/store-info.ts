import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-store-info',
  templateUrl: 'store-info.html',
})
export class StoreInfoPage {
name:any;
phone:any;
address:any;
distance:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
    this.name=this.navParams.get("name");
    this.phone=this.navParams.get("phone");
    this.address=this.navParams.get("address");
    this.distance=this.navParams.get("distance");
  }
  close(){
    this.navCtrl.pop();
  }

}
