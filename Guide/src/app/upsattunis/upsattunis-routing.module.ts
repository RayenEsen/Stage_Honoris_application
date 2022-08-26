import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpsattunisPage } from './upsattunis.page';

const routes: Routes = [
  {
    path: '',
    component: UpsattunisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpsattunisPageRoutingModule {}
