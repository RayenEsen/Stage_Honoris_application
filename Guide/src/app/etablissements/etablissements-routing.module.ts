import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtablissementsPage } from './etablissements.page';

const routes: Routes = [
  {
    path: '',
    component: EtablissementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtablissementsPageRoutingModule {}
