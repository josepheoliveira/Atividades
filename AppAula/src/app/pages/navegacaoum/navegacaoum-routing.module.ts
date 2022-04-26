import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavegacaoumPage } from './navegacaoum.page';

const routes: Routes = [
  {
    path: '',
    component: NavegacaoumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavegacaoumPageRoutingModule {}
