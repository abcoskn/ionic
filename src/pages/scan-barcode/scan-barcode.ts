import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ProductPage } from '../product/product';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the ScanBarcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan-barcode',
  templateUrl: 'scan-barcode.html',
})
export class ScanBarcodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private barcodeScanner: BarcodeScanner) {
    
  }
  ionViewWillEnter() {
    this.barcodeScanner.scan().then(barcodeData => {
      if(barcodeData.text=="")
        this.navCtrl.setRoot(TabsPage);
      else
        this.navCtrl.push(ProductPage,{data:barcodeData.text});
    }).catch(err => {
        console.log('Error', err);
    });
  }
  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.navCtrl.push(ProductPage,{data:barcodeData.text});
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
