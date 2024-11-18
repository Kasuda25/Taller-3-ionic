import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('src/app/pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register/:id',
    loadChildren: () => import('src/app/pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('src/app/pages/home/home.module').then(m => m.HomePageModule),
    canActivate: [authGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [authGuard]
  },
  {
    path: 'pets',
    loadChildren: () => import('src/app/pages/pets/pets/pets.module').then(m => m.PetModule),
    canActivate: [authGuard]
  },
  {
    path: 'petlist',
    loadChildren: () => import('./pages/pets/petlist/petlist.module').then(m => m.PetlistPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'petform',
    loadChildren: () => import('./pages/pets/petform/petform.module').then(m => m.PetformPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'vaccine',
    loadChildren: () => import('src/app/pages/vaccine/vaccine.module').then(m => m.VaccinePageModule),
    canActivate: [authGuard]
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
