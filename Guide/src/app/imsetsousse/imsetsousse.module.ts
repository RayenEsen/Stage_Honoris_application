import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImsetsoussePageRoutingModule } from './imsetsousse-routing.module';

import { ImsetsoussePage } from './imsetsousse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImsetsoussePageRoutingModule
  ],
  declarations: [ImsetsoussePage]
})
export class ImsetsoussePageModule {}
