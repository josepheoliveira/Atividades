import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavegacaotresPageRoutingModule } from './navegacaotres-routing.module';

import { NavegacaotresPage } from './navegacaotres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavegacaotresPageRoutingModule
  ],
  declarations: [NavegacaotresPage]
})
export class NavegacaotresPageModule {}
