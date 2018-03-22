import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { FunctionsProvider } from '../../providers/functions/functions';
import { SelectaccountPage } from '../selectaccount/selectaccount';
import { OrderHistoryPage } from '../order-history/order-history';
import { GreenProductsPage } from '../green-products/green-products';
/**
 * Generated class for the MyaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myaccount',
  templateUrl: 'myaccount.html',
})
export class MyaccountPage {
  phone:any;
  userid:any;
  item: any = new Array<any>();
  log:boolean;
  name:any;
  fname:any;
  selectedaccount:any;
  point:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public functions:FunctionsProvider,public modalCtrl: ModalController) {
    

    
    this.userid=window.localStorage.getItem("userid");
    if (!isNaN(this.userid) && this.userid!=null)
    {
      this.log=true;
      this.name=window.localStorage.getItem("name");
      this.fname=window.localStorage.getItem("fname");
      this.point=window.localStorage.getItem("point");
    }
    else
      this.log=false;
  }   

  login(){
    this.functions.presentLoading("Giriş Yapılıyor..");
    this.functions.login(this.phone).subscribe(response => {
      if(response.success!="false"){
        this.functions.loading.dismiss();
        if(response.length>1)
        {
          let radios = this.modalCtrl.create(SelectaccountPage, { items:response });
          radios.present();
          radios.onDidDismiss(data => {
            if(data==true)
            {
              this.log=true;
              this.navCtrl.setRoot(this.navCtrl.getActive().component);
              this.functions.showAlert("Giriş Başarılı!","Başarıyla giriş yaptınız.","Tamam");
            }
          });
        }
        else
        {
          window.localStorage.setItem("userid",response[0]["CSTID"]);
          window.localStorage.setItem("cardid",response[0]["TCARDCST"]);
          window.localStorage.setItem("name",response[0]["TNAMECST"]);
          window.localStorage.setItem("fname",response[0]["TFNAMCST"]);
          window.localStorage.setItem("point",response[0]["point"]);
          this.log=true;
          this.navCtrl.setRoot(this.navCtrl.getActive().component);
          this.functions.showAlert("Giriş Başarılı!","Başarıyla giriş yaptınız.","Tamam");
        }
      }
    });
  }

  logout(){
    window.localStorage.clear();
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
  ordersHistory(){
    this.navCtrl.push(OrderHistoryPage);
  }
  greenproducts(){
    this.navCtrl.push(GreenProductsPage);
  }
  update(){
    this.point="edef";
  }
  update2(){
    console.log(this.point);
  }
}
