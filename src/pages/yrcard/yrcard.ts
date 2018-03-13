import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the YrcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-yrcard',
  templateUrl: 'yrcard.html',
})
export class YrcardPage {
task1:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.task1=setTimeout(()=>{
      if(document.getElementById("card").className=="")
        document.getElementById("card").className="flipped";
      else
        document.getElementById("card").className="";
    },1000);
    this.task1=setTimeout(()=>{
      if(document.getElementById("card").className=="")
        document.getElementById("card").className="flipped";
      else
        document.getElementById("card").className="";
    },2000);
  }
  flip(){
    if(document.getElementById("card").className=="")
      document.getElementById("card").className="flipped";
    else
      document.getElementById("card").className="";
  }


}
