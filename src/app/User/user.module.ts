
import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RegisterPage } from '../Pages/Register/register/register.page';
import { LoginPage } from '../Pages/Login/login/login.page';


@NgModule({
  declarations: [RegisterPage, LoginPage],
  imports: [
    UserRoutingModule,
    SharedModule,
  ],
})
export class UserModule {}
