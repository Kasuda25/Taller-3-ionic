import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('src/app/pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('src/app/pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('src/app/pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'vaccine',
    loadChildren: () => import('src/app/pages/vaccine/vaccine.module').then(m => m.VaccinePageModule)
  },
  {
    path: 'pets',
    loadChildren: () => import('src/app/pages/pets/pets/pets.module').then(m => m.PetModule)
  },
  {
    path: 'petlist',
    loadChildren: () => import('./pages/pets/petlist/petlist.module').then(m => m.PetlistPageModule)
  },
  {
    path: 'petform',
    loadChildren: () => import('./pages/pets/petform/petform.module').then(m => m.PetformPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
