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
      document.getElementById("hand").style.zoom="0.8";
    },800);
    this.task1=setTimeout(()=>{
      document.getElementById("hand").style.zoom="1";
    },1000);
    this.task1=setTimeout(()=>{
      this.flip();
    },1200);


    this.task1=setTimeout(()=>{
      document.getElementById("hand").style.zoom="0.8";
    },2500);
    this.task1=setTimeout(()=>{
      document.getElementById("hand").style.zoom="1";
    },2700);
    this.task1=setTimeout(()=>{
      this.flip();
    },2900);
    this.task1=setTimeout(()=>{
      document.getElementById("hand").style.top="-300px";
    },3900);
  }

  flip(){
    if(document.getElementById("card").className=="")
      document.getElementById("card").className="flipped";
    else
      document.getElementById("card").className="";
  }


}
