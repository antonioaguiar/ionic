import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { AgToolbarComponent } from '../componentes/ag-toolbar/ag-toolbar.component';
import { FlashCardComponent } from '../componentes/flash-card/flash-card.component';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, AgToolbarComponent, FlashCardComponent]
})
export class HomePageModule {}
