import { NgModule } from '@angular/core';
import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RegisterPageRoutingModule,
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
