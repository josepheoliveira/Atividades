import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestedezPageRoutingModule } from './testedez-routing.module';

import { TestedezPage } from './testedez.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestedezPageRoutingModule
  ],
  declarations: [TestedezPage]
})
export class TestedezPageModule {}
