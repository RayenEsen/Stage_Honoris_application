import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpsatsfaxPageRoutingModule } from './upsatsfax-routing.module';

import { UpsatsfaxPage } from './upsatsfax.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpsatsfaxPageRoutingModule
  ],
  declarations: [UpsatsfaxPage]
})
export class UpsatsfaxPageModule {}
