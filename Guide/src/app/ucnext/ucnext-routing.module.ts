import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UCnextPage } from './ucnext.page';

const routes: Routes = [
  {
    path: '',
    component: UCnextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UCnextPageRoutingModule {}
