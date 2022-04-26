import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestecincoPageRoutingModule } from './testecinco-routing.module';

import { TestecincoPage } from './testecinco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestecincoPageRoutingModule
  ],
  declarations: [TestecincoPage]
})
export class TestecincoPageModule {}
