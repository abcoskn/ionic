import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GreenProductsPage } from './green-products';

@NgModule({
  declarations: [
    GreenProductsPage,
  ],
  imports: [
    IonicPageModule.forChild(GreenProductsPage),
  ],
})
export class GreenProductsPageModule {}
