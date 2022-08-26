import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspritunisPageRoutingModule } from './espritunis-routing.module';

import { EspritunisPage } from './espritunis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspritunisPageRoutingModule
  ],
  declarations: [EspritunisPage]
})
export class EspritunisPageModule {}
