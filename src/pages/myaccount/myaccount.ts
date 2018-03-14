import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FunctionsProvider } from '../../providers/functions/functions';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,public functions:FunctionsProvider) {
    this.userid=window.localStorage.getItem("userid");
    if (!isNaN(this.userid) && this.userid!=null)
    {
      this.log=true;
      this.name=window.localStorage.getItem("name");
      this.fname=window.localStorage.getItem("fname");
    }
    else
      this.log=false;
    }

  login(){
    this.functions.presentLoading("Giriş Yapılıyor..");
    this.functions.login(this.phone).subscribe(response => {
      if(response.success!="false"){
        this.functions.loading.dismiss();
        this.functions.showAlert("Giriş Başarılı!","Başarıyla giriş yaptınız.","Tamam");
        window.localStorage.setItem("userid",response[0]["CSTID"]);
        window.localStorage.setItem("cardid",response[0]["TCARDCST"]);
        window.localStorage.setItem("name",response[0]["TNAMECST"]);
        window.localStorage.setItem("fname",response[0]["TFNAMCST"]);
        this.log=true;
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
      }
    });
  }

  logout(){
    
    window.localStorage.clear();
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
}
