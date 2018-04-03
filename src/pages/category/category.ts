import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

import { HomePage } from '../home/home';
import { StoresMapPage } from '../stores-map/stores-map';
import { YrcardPage } from '../yrcard/yrcard';
import { MyaccountPage } from '../myaccount/myaccount';
import { FunctionsProvider } from '../../providers/functions/functions';
/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})

export class CategoryPage {
params:any;
title:any;
id:any;
items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public functions:FunctionsProvider) {
    this.params=this.navParams.get("params");
    this.title=this.params.title;
    this.functions.getProducts(this.params.category).subscribe(response => {
      if(response.success!="false"){
        this.items=response;
      }
    });
  }
  percent(val1,val2)
  {
    val2=val2.replace(",",".");
    var result=Math.round(100-((Number(val2)*100)/Number(val1)));
    return "% "+result;
  }
  comparison(val1,val2){
    val2=val2.replace(",",".");
    if(val2.substr(val2.length-1,1)=="0")
      val2=val2.substr(0,val2.length-1);
    if(val2.substr(val2.length-1,1)=="0")
      val2=val2.substr(0,val2.length-1);
    if(val1==val2)
      return false;
    else
      return true;

  }
}