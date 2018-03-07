import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoresMapPage } from './stores-map';

@NgModule({
  declarations: [
    StoresMapPage,
  ],
  imports: [
    IonicPageModule.forChild(StoresMapPage),
  ],
})
export class StoresMapPageModule {}
