import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImsetnextPage } from './imsetnext.page';

const routes: Routes = [
  {
    path: '',
    component: ImsetnextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImsetnextPageRoutingModule {}
