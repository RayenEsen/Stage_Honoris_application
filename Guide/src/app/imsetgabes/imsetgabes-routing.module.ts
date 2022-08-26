import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImsetgabesPage } from './imsetgabes.page';

const routes: Routes = [
  {
    path: '',
    component: ImsetgabesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImsetgabesPageRoutingModule {}
