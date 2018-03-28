import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MyaccountPage } from '../pages/myaccount/myaccount';
import { ActbeautifulPage } from '../pages/actbeautiful/actbeautiful';
import { StoresMapPage } from '../pages/stores-map/stores-map';
import { TabsPage } from '../pages/tabs/tabs';
import { ScanBarcodePage } from '../pages/scan-barcode/scan-barcode';
import { ProductPage } from '../pages/product/product';
import { FunctionsProvider } from '../providers/functions/functions';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;
  items:any;
  categories:boolean=false;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private screenOrientation: ScreenOrientation,public functions:FunctionsProvider) {
    this.initializeApp();
    //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Ana Sayfa', component: TabsPage },
      { title: 'Kategoriler', component: ListPage },
      { title: 'Act Beautiful', component: ActbeautifulPage },
      { title: 'Hesabım', component: MyaccountPage },
      { title: 'Mağazalar', component: StoresMapPage },
      { title: 'Barkod Tara', component: ScanBarcodePage }
    ];
    this.functions.getCategories().subscribe(response => {
      if(response.success!="false"){
        this.items=response;
      }
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  categorymenu(){
    if(this.categories==true)
      this.categories=false;
    else
      this.categories=true;
  }
  submenu(items,item){
    console.log(item);
    if(item.childs.length>0)
    {
      if(item.show==false)
      {
        items.forEach(element => {
          element.show=false;
        });
        item.show=true;
      }
      else
      {
        item.show=false;
      }
    }
  }

}