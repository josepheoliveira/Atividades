import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestesetePageRoutingModule } from './testesete-routing.module';

import { TestesetePage } from './testesete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestesetePageRoutingModule
  ],
  declarations: [TestesetePage]
})
export class TestesetePageModule {}
