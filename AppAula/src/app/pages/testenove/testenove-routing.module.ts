import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestenovePage } from './testenove.page';

const routes: Routes = [
  {
    path: '',
    component: TestenovePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestenovePageRoutingModule {}
