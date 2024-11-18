import { NgModule } from '@angular/core';
import { PetFormComponent } from 'src/app/pages/pets/petform/petform.component';
import { PetListComponent } from 'src/app/pages/pets/petlist/petlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PetFormComponent, PetListComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [PetFormComponent, PetListComponent],
})
export class PetModule {}
