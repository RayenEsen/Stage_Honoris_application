import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImsetgabesPageRoutingModule } from './imsetgabes-routing.module';

import { ImsetgabesPage } from './imsetgabes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImsetgabesPageRoutingModule
  ],
  declarations: [ImsetgabesPage]
})
export class ImsetgabesPageModule {}
