import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspritunisPage } from './espritunis.page';

const routes: Routes = [
  {
    path: '',
    component: EspritunisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspritunisPageRoutingModule {}
