import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpsatnextPageRoutingModule } from './upsatnext-routing.module';

import { UpsatnextPage } from './upsatnext.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpsatnextPageRoutingModule
  ],
  declarations: [UpsatnextPage]
})
export class UpsatnextPageModule {}
