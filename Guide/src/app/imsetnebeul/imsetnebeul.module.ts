import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImsetnebeulPageRoutingModule } from './imsetnebeul-routing.module';

import { ImsetnebeulPage } from './imsetnebeul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImsetnebeulPageRoutingModule
  ],
  declarations: [ImsetnebeulPage]
})
export class ImsetnebeulPageModule {}
