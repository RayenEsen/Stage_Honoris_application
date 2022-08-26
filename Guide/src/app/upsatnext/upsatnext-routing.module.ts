import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpsatnextPage } from './upsatnext.page';

const routes: Routes = [
  {
    path: '',
    component: UpsatnextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpsatnextPageRoutingModule {}
