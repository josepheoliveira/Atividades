import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavegacaocincoPageRoutingModule } from './navegacaocinco-routing.module';

import { NavegacaocincoPage } from './navegacaocinco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavegacaocincoPageRoutingModule
  ],
  declarations: [NavegacaocincoPage]
})
export class NavegacaocincoPageModule {}
