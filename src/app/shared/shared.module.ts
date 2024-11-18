import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from './Components/button/button.component';
import { InputComponent } from './Components/input/input.component';
import { AvatarComponent } from './Components/avatar/avatar.component';
import { ToastService } from './controllers/toastservice/toastservice.service';
import { LoadingserviceService } from './controllers/loadingservice/loadingservice.service';
import { LocalNotificationsService } from './controllers/localnotifications/local-notifications.service';
import { StorageService } from './services/storage/storage.service';
import { DatabaseService } from './services/database/database.service';
import { AuthService } from './services/Auth/auth.service'; 

const COMPONENTS = [
  ButtonComponent,
  InputComponent,
  AvatarComponent
];

const MODULES = [
  CommonModule,
  FormsModule,
  IonicModule,
  ReactiveFormsModule
];

const PROVIDERS = [
  StorageService,
  DatabaseService,
  AuthService
]

const CONTROLLERS = [
  ToastService,
  LoadingserviceService,
  LocalNotificationsService
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ...MODULES,
  ],
  providers:[ ... PROVIDERS, ...CONTROLLERS],
  exports: [...COMPONENTS, ...MODULES]
})
export class SharedModule { }
