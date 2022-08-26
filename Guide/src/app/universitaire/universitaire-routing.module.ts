import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UniversitairePage } from './universitaire.page';

const routes: Routes = [
  {
    path: '',
    component: UniversitairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniversitairePageRoutingModule {}
