import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AacnextPageRoutingModule } from './aacnext-routing.module';

import { AacnextPage } from './aacnext.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AacnextPageRoutingModule
  ],
  declarations: [AacnextPage]
})
export class AacnextPageModule {}
