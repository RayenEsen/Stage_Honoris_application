import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UCnextPageRoutingModule } from './ucnext-routing.module';

import { UCnextPage } from './ucnext.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UCnextPageRoutingModule
  ],
  declarations: [UCnextPage]
})
export class UCnextPageModule {}
