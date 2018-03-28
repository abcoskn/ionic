import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MyaccountPage } from '../pages/myaccount/myaccount';
import { ActbeautifulPage } from '../pages/actbeautiful/actbeautiful';
import { StoresMapPage } from '../pages/stores-map/stores-map';
import { StoreInfoPage } from '../pages/store-info/store-info';
import { TabsPage } from '../pages/tabs/tabs';
import { YrcardPage } from '../pages/yrcard/yrcard';
import { SelectaccountPage } from '../pages/selectaccount/selectaccount';
import { OrderHistoryPage } from '../pages/order-history/order-history';
import { GreenProductsPage } from '../pages/green-products/green-products';
import { ScanBarcodePage } from '../pages/scan-barcode/scan-barcode';
import { ProductPage } from '../pages/product/product';
import { SublistPage } from '../pages/sublist/sublist';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FunctionsProvider } from '../providers/functions/functions';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Geolocation } from '@ionic-native/geolocation';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

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
    YrcardPage,
    SelectaccountPage,
    OrderHistoryPage,
    GreenProductsPage,
    ScanBarcodePage,
    ProductPage,
    SublistPage
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
    YrcardPage,
    SelectaccountPage,
    OrderHistoryPage,
    GreenProductsPage,
    ScanBarcodePage,
    ProductPage,
    SublistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FunctionsProvider,
    InAppBrowser,
    Geolocation,
    ScreenOrientation,
    BarcodeScanner
  ]
})
export class AppModule {}