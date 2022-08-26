import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AacnebeulPageRoutingModule } from './aacnebeul-routing.module';

import { AacnebeulPage } from './aacnebeul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AacnebeulPageRoutingModule
  ],
  declarations: [AacnebeulPage]
})
export class AacnebeulPageModule {}
