import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetFormComponent } from 'src/app/Pages/pets/petform/petform.component';
import { PetListComponent } from 'src/app/Pages/pets/petlist/petlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PetService } from 'src/app/Pages/pets/services/pet.service';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [PetFormComponent, PetListComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [PetFormComponent, PetListComponent],
  providers: [PetService]
})
export class PetModule {}
