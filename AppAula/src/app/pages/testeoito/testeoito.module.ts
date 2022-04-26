import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TesteoitoPageRoutingModule } from './testeoito-routing.module';

import { TesteoitoPage } from './testeoito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TesteoitoPageRoutingModule
  ],
  declarations: [TesteoitoPage]
})
export class TesteoitoPageModule {}
