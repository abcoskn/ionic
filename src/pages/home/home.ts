import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http,Headers,RequestOptions } from '@angular/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
image:any;

  constructor(public navCtrl: NavController,private http: Http) {
    this.image="";
  }

}
