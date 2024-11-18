import { NgModule } from '@angular/core';
import { PetFormComponent } from 'src/app/pages/pets/petform/petform.component';
import { PetListComponent } from 'src/app/pages/pets/petlist/petlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PetService } from 'src/app/pages/pets/services/pet.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PetFormComponent, PetListComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [PetFormComponent, PetListComponent],
  providers: [PetService]
})
export class PetModule {}
