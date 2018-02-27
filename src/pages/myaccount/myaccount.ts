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
email:any;
password:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public functions:FunctionsProvider) {

  }

  login(){
    this.functions.presentLoading("Giriş Yapılıyor..");
    this.functions.login(this.email,this.password).subscribe(response => {
      console.log(response);
      if(response.indexOf("Merhaba")> -1)
      {
        this.functions.loading.dismiss();
        this.functions.showAlert("Giriş Başarılı!","Başarıyla giriş yaptınız.","Tamam");
      }
      else{
        this.functions.loading.dismiss();
        this.functions.presentToast("Kullanıcı adı veya şifre yanlış!");
      }
    });
  }
}
