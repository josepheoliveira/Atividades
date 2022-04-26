import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestequatroPage } from './testequatro.page';

const routes: Routes = [
  {
    path: '',
    component: TestequatroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestequatroPageRoutingModule {}
