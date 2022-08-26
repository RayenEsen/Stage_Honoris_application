import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtablissementsPageRoutingModule } from './etablissements-routing.module';

import { EtablissementsPage } from './etablissements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtablissementsPageRoutingModule
  ],
  declarations: [EtablissementsPage]
})
export class EtablissementsPageModule {}
