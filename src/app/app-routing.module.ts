import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('src/app/Pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('src/app/Pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('src/app/Pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'vaccine',
    loadChildren: () => import('src/app/Pages/vaccine/vaccine.module').then( m => m.VaccinePageModule)
  },

  {
    path: 'home',
    loadChildren: () => import('src/app/Pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('src/app/Pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('src/app/Pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pets',
    loadChildren: () => import('src/app/Pages/pets/pets/pets.module').then( m => m.PetModule)
  },
  {
    path: 'petform',
    loadChildren: () => import('src/app/Pages/pets/petform/petform.component').then( m => m.PetFormComponent)
  },
  {
    path: 'petlist',
    loadChildren: () => import('src/app/Pages/pets/petlist/petlist.component').then( m => m.PetListComponent)
  },


];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
