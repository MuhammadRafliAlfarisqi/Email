import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KeluarPageRoutingModule } from './keluar-routing.module';

import { KeluarPage } from './keluar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KeluarPageRoutingModule
  ],
  declarations: [KeluarPage]
})
export class KeluarPageModule {}
