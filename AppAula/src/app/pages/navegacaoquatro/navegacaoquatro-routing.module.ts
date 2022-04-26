import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavegacaoquatroPage } from './navegacaoquatro.page';

const routes: Routes = [
  {
    path: '',
    component: NavegacaoquatroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavegacaoquatroPageRoutingModule {}
