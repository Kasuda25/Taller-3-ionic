import { NgModule } from '@angular/core';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    LoginPageRoutingModule,
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
