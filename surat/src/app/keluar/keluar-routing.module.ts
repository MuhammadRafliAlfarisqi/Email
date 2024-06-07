import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeluarPage } from './keluar.page';

const routes: Routes = [
  {
    path: '',
    component: KeluarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KeluarPageRoutingModule {}
