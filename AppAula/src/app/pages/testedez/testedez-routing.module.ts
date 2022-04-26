import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestedezPage } from './testedez.page';

const routes: Routes = [
  {
    path: '',
    component: TestedezPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestedezPageRoutingModule {}
