import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPage } from '../home/Register/register/register.page';
import { LoginPage } from '../home/Login/login/login.page';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'register',
    component: RegisterPage
  },
  {
    path: '',
    redirectTo: '/user/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
