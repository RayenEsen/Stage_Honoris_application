import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpsattunisPageRoutingModule } from './upsattunis-routing.module';

import { UpsattunisPage } from './upsattunis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpsattunisPageRoutingModule
  ],
  declarations: [UpsattunisPage]
})
export class UpsattunisPageModule {}
