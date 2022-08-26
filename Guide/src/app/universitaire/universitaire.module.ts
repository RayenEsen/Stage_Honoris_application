import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UniversitairePageRoutingModule } from './universitaire-routing.module';

import { UniversitairePage } from './universitaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UniversitairePageRoutingModule
  ],
  declarations: [UniversitairePage]
})
export class UniversitairePageModule {}
