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
  
  private baseUrl: string = "http://188.119.14.66:8888/webapi/";
  private loginurl:string;
  private getstoresurl:string;
  private getuserurl:string;
  private getordershistoryurl:string;
  private getgreenproductsurl:string;
  private getcategoriesurl:string;
  private getproductsurl:string;


  public userid;
  local:any;

  constructor(
    public http: Http,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
    this.initURL(this.baseUrl);
    this.local = window.localStorage;
  }

  public login(phone){
    var body='phone='+phone;
    return this.runRequest(this.loginurl, body);
  }
  public getuser(){
    this.initGetUserInfo();
    var body='userid='+this.userid;
    return this.runRequest(this.getuserurl, body);
  }
  
  public getstores(latitude,longitude){
    var body='latitude='+latitude+'&longitude='+longitude;
    return this.runRequest(this.getstoresurl,body);
  }
  
  public getOrdersHistory(){
    this.initGetUserInfo();
    var body='userid='+this.userid;
    return this.runRequest(this.getordershistoryurl, body);
  }
  public getGreenProducts(){
    this.initGetUserInfo();
    return this.runRequest(this.getgreenproductsurl, "");
  }
  public getCategories(){
    this.initGetUserInfo();
    return this.runRequest(this.getcategoriesurl, "");
  }
  public getProducts(category){
    this.initGetUserInfo();
    var body='category='+category;
    return this.runRequest(this.getproductsurl, body);
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
  
  private initGetUserInfo() {
    this.userid = this.local.getItem('userid');
  }

  private initURL(_baseURL: string) {
    this.loginurl = _baseURL +"users.php";
    this.getstoresurl = _baseURL +"stores.php";
    this.getuserurl = _baseURL +"getuser.php";
    this.getordershistoryurl = _baseURL +"getorderhistory.php";
    this.getgreenproductsurl = _baseURL +"greenproducts.php";
    this.getcategoriesurl = _baseURL +"categories.php";
    this.getproductsurl = _baseURL +"products.php";

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