import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashCardComponent } from './flash-card/flash-card.component';
import { AgToolbarComponent } from './ag-toolbar/ag-toolbar.component';



@NgModule({
  declarations: [FlashCardComponent, AgToolbarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FlashCardComponent,
    AgToolbarComponent
  ],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentesModule { }
