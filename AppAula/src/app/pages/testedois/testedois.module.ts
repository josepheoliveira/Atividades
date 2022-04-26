import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestedoisPageRoutingModule } from './testedois-routing.module';

import { TestedoisPage } from './testedois.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestedoisPageRoutingModule
  ],
  declarations: [TestedoisPage]
})
export class TestedoisPageModule {}
