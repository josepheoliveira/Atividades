import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavegacaoumPageRoutingModule } from './navegacaoum-routing.module';

import { NavegacaoumPage } from './navegacaoum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavegacaoumPageRoutingModule
  ],
  declarations: [NavegacaoumPage]
})
export class NavegacaoumPageModule {}
