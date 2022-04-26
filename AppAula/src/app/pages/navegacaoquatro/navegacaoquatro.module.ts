import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavegacaoquatroPageRoutingModule } from './navegacaoquatro-routing.module';

import { NavegacaoquatroPage } from './navegacaoquatro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavegacaoquatroPageRoutingModule
  ],
  declarations: [NavegacaoquatroPage]
})
export class NavegacaoquatroPageModule {}
