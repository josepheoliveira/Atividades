import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TesteseisPageRoutingModule } from './testeseis-routing.module';

import { TesteseisPage } from './testeseis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TesteseisPageRoutingModule
  ],
  declarations: [TesteseisPage]
})
export class TesteseisPageModule {}
