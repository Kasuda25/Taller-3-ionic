import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PetRoutingModule } from './pet-routing.module';

import { PetFormPageModule } from './pet-form/pet-form.module'; // Importa el módulo del formulario
import { PetListPageModule } from './pet-list/pet-list.module'; // Importa el módulo de la lista

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PetRoutingModule,
    PetFormPageModule, // Usa los módulos individuales aquí
    PetListPageModule,
  ],
})
export class PetModule {}

