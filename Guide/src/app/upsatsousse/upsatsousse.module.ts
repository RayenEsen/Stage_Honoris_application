import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpsatsoussePageRoutingModule } from './upsatsousse-routing.module';

import { UpsatsoussePage } from './upsatsousse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpsatsoussePageRoutingModule
  ],
  declarations: [UpsatsoussePage]
})
export class UpsatsoussePageModule {}
