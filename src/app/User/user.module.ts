
import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RegisterPage } from '../home/Register/register/register.page';
import { LoginPage } from '../home/Login/login/login.page';

@NgModule({
  declarations: [RegisterPage, LoginPage],
  imports: [
    UserRoutingModule,
    SharedModule,
  ],
})
export class UserModule {}
