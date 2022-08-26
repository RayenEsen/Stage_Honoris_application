import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AactunisPage } from './aactunis.page';

const routes: Routes = [
  {
    path: '',
    component: AactunisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AactunisPageRoutingModule {}
