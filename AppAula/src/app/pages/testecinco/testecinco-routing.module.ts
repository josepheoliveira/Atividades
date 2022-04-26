import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestecincoPage } from './testecinco.page';

const routes: Routes = [
  {
    path: '',
    component: TestecincoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestecincoPageRoutingModule {}
