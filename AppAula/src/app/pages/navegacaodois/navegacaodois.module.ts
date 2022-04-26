import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavegacaodoisPageRoutingModule } from './navegacaodois-routing.module';

import { NavegacaodoisPage } from './navegacaodois.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavegacaodoisPageRoutingModule
  ],
  declarations: [NavegacaodoisPage]
})
export class NavegacaodoisPageModule {}
