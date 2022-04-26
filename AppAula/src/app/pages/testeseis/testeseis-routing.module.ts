import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TesteseisPage } from './testeseis.page';

const routes: Routes = [
  {
    path: '',
    component: TesteseisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TesteseisPageRoutingModule {}
