import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestenovePageRoutingModule } from './testenove-routing.module';

import { TestenovePage } from './testenove.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestenovePageRoutingModule
  ],
  declarations: [TestenovePage]
})
export class TestenovePageModule {}
