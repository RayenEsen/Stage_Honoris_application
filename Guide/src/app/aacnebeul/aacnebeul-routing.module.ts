import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AacnebeulPage } from './aacnebeul.page';

const routes: Routes = [
  {
    path: '',
    component: AacnebeulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AacnebeulPageRoutingModule {}
