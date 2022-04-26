import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TesteoitoPage } from './testeoito.page';

const routes: Routes = [
  {
    path: '',
    component: TesteoitoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TesteoitoPageRoutingModule {}
