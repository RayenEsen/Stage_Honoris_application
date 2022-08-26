import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImsetnextPageRoutingModule } from './imsetnext-routing.module';

import { ImsetnextPage } from './imsetnext.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImsetnextPageRoutingModule
  ],
  declarations: [ImsetnextPage]
})
export class ImsetnextPageModule {}
