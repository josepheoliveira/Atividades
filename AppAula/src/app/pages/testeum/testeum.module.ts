import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TesteumPageRoutingModule } from './testeum-routing.module';

import { TesteumPage } from './testeum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TesteumPageRoutingModule
  ],
  declarations: [TesteumPage]
})
export class TesteumPageModule {}
