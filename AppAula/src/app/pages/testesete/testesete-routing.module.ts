import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestesetePage } from './testesete.page';

const routes: Routes = [
  {
    path: '',
    component: TestesetePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestesetePageRoutingModule {}
