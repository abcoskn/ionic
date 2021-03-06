import { Component } from '@angular/core';
import { NavController, NavParams, ModalController} from 'ionic-angular';
import { Events } from 'ionic-angular';

import { HomePage } from '../home/home';
import { StoresMapPage } from '../stores-map/stores-map';
import { YrcardPage } from '../yrcard/yrcard';
import { MyaccountPage } from '../myaccount/myaccount';
import { FunctionsProvider } from '../../providers/functions/functions';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = HomePage;
  tab3Root: any = StoresMapPage;
  tab4Root: any = MyaccountPage;
  tab1Params:any;
  myIndex: number;

  task:any;
  notifications:any;
  messages:any;
  constructor(public events: Events,public functions:FunctionsProvider,navParams: NavParams,public modalCtrl: ModalController,public navCtrl: NavController) {
   
    let getComponentFromNavPArams = navParams.get('componentFromNavParams');
    if (getComponentFromNavPArams != undefined) {
      this.tab1Root = getComponentFromNavPArams;
      this.tab1Params={ params: navParams.get("params")};
    }
    else
    this.myIndex = navParams.data.tabIndex || 0;
    
  }
  showcard(){
    console.log("clickeddeded ");
    var card=this.modalCtrl.create(YrcardPage,"",{showBackdrop: true,enableBackdropDismiss: true,cssClass : 'yrcard'});
    card.present();
    
  }
  tabSelected(){
    console.log("tab selected");
    this.events.publish('functionCall:tabSelected');
  }
  openhome(){
    this.tab1Root=HomePage;
  }
}