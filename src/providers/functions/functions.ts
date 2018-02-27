import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions  } from '@angular/http';
import { ToastController,AlertController,LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the FunctionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class FunctionsProvider {

  loading:any;
  
  private baseUrl: string = "http://abctasarim.net/";
  private loginurl:string;

  constructor(
    public http: Http,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
    this.initURL(this.baseUrl);
  }

  public login(username,password){
    var body='emailAddress='+username+'&password='+password;
    return this.runRequest2(this.loginurl, body);
  }

  private runRequest(url: string, body: string) {
    let headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
    });
    let options = new RequestOptions({
        headers: headers
    });
    return this.http.post(url, body, options)
      .map(response => response.json());
  }

  private runRequest2(url: string, body: string) {
    let headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
    });
    let options = new RequestOptions({
        headers: headers
    });
    return this.http.post(url, body, options)
      .map(response => response.text());
  }
  
  private initURL(_baseURL: string) {
    this.loginurl = "https://m.trendyol.com";
  }

  presentToast(toastmessage) {
    let toast = this.toastCtrl.create({
      message: toastmessage,
      duration: 3000
    });
    toast.present();
  }

  presentLoading(loadingmessage) {
    this.loading = this.loadingCtrl.create({
      content: loadingmessage
    });
    this.loading.present();
  }

  showAlert(title,subtitle,button) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: [button]
    });
    alert.present();
  }
}