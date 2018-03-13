import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YrcardPage } from './yrcard';

@NgModule({
  declarations: [
    YrcardPage,
  ],
  imports: [
    IonicPageModule.forChild(YrcardPage),
  ],
})
export class YrcardPageModule {}
