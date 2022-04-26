import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestetresPage } from './testetres.page';

const routes: Routes = [
  {
    path: '',
    component: TestetresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestetresPageRoutingModule {}
