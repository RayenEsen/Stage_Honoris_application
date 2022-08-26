import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImsetunisPage } from './imsetunis.page';

const routes: Routes = [
  {
    path: '',
    component: ImsetunisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImsetunisPageRoutingModule {}
