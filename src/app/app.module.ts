import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MyaccountPage } from '../pages/myaccount/myaccount';
import { ActbeautifulPage } from '../pages/actbeautiful/actbeautiful';
import { StoresMapPage } from '../pages/stores-map/stores-map';
import { StoreInfoPage } from '../pages/store-info/store-info';
import { TabsPage } from '../pages/tabs/tabs';
import { YrcardPage } from '../pages/yrcard/yrcard';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FunctionsProvider } from '../providers/functions/functions';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MyaccountPage,
    ActbeautifulPage,
    StoresMapPage,
    StoreInfoPage,
    TabsPage,
    YrcardPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MyaccountPage,
    ActbeautifulPage,
    StoresMapPage,
    StoreInfoPage,
    TabsPage,
    YrcardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FunctionsProvider,
    InAppBrowser,
    Geolocation
  ]
})
export class AppModule {}