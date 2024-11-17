import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetListPage } from './pet-list/pet-list.page';
import { PetFormPage } from './pet-form/pet-form.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pet-form',
    pathMatch: 'full',
  },
  {
    path: 'pet-list',
    loadChildren: () => import('./pet-list/pet-list.module').then(m => m.PetListPageModule)
  },
  {
    path: 'pet-form',
    loadChildren: () => import('./pet-form/pet-form.module').then(m => m.PetFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetRoutingModule {}
