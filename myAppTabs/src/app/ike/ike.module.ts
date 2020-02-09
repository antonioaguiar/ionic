import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IkePageRoutingModule } from './ike-routing.module';

import { IkePage } from './ike.page';
import { DragulaModule } from 'ng2-dragula';
import { ComponentesModule } from './../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IkePageRoutingModule,
    DragulaModule,
    ComponentesModule
  ],
  declarations: [IkePage]
})
export class IkePageModule {}
