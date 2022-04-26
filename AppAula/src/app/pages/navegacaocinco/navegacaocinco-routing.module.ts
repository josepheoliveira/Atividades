import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavegacaocincoPage } from './navegacaocinco.page';

const routes: Routes = [
  {
    path: '',
    component: NavegacaocincoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavegacaocincoPageRoutingModule {}
