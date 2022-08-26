import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpsatsfaxPage } from './upsatsfax.page';

const routes: Routes = [
  {
    path: '',
    component: UpsatsfaxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpsatsfaxPageRoutingModule {}
