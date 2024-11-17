import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

const COMPONENTS = [ButtonComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [...COMPONENTS]
})
export class SharedModule { }
