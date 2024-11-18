import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetlistPage } from './petlist.page';

const routes: Routes = [
  {
    path: '',
    component: PetlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetlistPageRoutingModule {}
