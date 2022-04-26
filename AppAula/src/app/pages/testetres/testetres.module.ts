import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestetresPageRoutingModule } from './testetres-routing.module';

import { TestetresPage } from './testetres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestetresPageRoutingModule
  ],
  declarations: [TestetresPage]
})
export class TestetresPageModule {}
