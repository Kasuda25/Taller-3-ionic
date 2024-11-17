import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pet-list',
    loadChildren: () => import('./pet/pet-list/pet-list.module').then( m => m.PetListPageModule)
  },
  {
    path: 'pet-form',
    loadChildren: () => import('./pet/pet-form/pet-form.module').then( m => m.PetFormPageModule)
  },
  {
  path: 'pets',
  loadChildren: () =>
    import('./pet/pet.module').then((m) => m.PetModule),
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
