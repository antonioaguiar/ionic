import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IkePage } from './ike.page';

const routes: Routes = [
  {
    path: '',
    component: IkePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IkePageRoutingModule {}
