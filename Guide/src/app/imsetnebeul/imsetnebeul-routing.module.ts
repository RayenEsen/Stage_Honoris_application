import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImsetnebeulPage } from './imsetnebeul.page';

const routes: Routes = [
  {
    path: '',
    component: ImsetnebeulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImsetnebeulPageRoutingModule {}
