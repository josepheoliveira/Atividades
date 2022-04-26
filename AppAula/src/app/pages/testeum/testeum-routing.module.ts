import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TesteumPage } from './testeum.page';

const routes: Routes = [
  {
    path: '',
    component: TesteumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TesteumPageRoutingModule {}
