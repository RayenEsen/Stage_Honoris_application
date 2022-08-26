import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImsetunisPageRoutingModule } from './imsetunis-routing.module';

import { ImsetunisPage } from './imsetunis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImsetunisPageRoutingModule
  ],
  declarations: [ImsetunisPage]
})
export class ImsetunisPageModule {}
