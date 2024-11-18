import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'login',
    loadChildren: () => import('src/app/pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadChildren: () => import('src/app/pages/register/register.page').then( m => m.RegisterPage)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
