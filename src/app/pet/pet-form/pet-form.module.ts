import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importar los formularios
import { IonicModule } from '@ionic/angular';

import { PetFormPage } from './pet-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // Asegúrate de importar ReactiveFormsModule para formularios reactivos
    IonicModule,
  ],
  declarations: [PetFormPage],
  exports: [PetFormPage] // Exportar para ser usado en otros módulos
})
export class PetFormPageModule {}
