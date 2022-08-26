import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImsetsoussePage } from './imsetsousse.page';

const routes: Routes = [
  {
    path: '',
    component: ImsetsoussePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImsetsoussePageRoutingModule {}
