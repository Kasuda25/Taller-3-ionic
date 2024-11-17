import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment.prod';
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      SharedModule,
      AngularFireModule.initializeApp(environment.FIREBASE_CONFIG),
      AngularFireStorageModule,
      AngularFireAuthModule,
      AngularFirestoreModule
    ]
  })
  export class CoreModule { }
  