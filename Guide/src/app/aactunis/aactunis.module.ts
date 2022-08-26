import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AactunisPageRoutingModule } from './aactunis-routing.module';

import { AactunisPage } from './aactunis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AactunisPageRoutingModule
  ],
  declarations: [AactunisPage]
})
export class AactunisPageModule {}
