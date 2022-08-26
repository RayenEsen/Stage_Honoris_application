import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpsatsoussePage } from './upsatsousse.page';

const routes: Routes = [
  {
    path: '',
    component: UpsatsoussePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpsatsoussePageRoutingModule {}
