import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfessionalPageRoutingModule } from './professional-routing.module';

import { ProfessionalPage } from './professional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfessionalPageRoutingModule
  ],
  declarations: [ProfessionalPage]
})
export class ProfessionalPageModule {}
