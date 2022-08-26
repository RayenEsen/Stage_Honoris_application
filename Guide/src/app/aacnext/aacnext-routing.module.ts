import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AacnextPage } from './aacnext.page';

const routes: Routes = [
  {
    path: '',
    component: AacnextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AacnextPageRoutingModule {}
