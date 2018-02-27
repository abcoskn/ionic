import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the ActbeautifulPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actbeautiful',
  templateUrl: 'actbeautiful.html',
})
export class ActbeautifulPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser) {
    const browser = this.iab.create('https://abspace.yves-rocher.com/tr/tr/',"toolbar=yes,location=no");
  }


}
