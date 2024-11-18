import { NgModule } from '@angular/core';
import { PetformPageRoutingModule } from './petform-routing.module';
import { PetformPage } from './petform.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    PetformPageRoutingModule
  ],
  declarations: [PetformPage]
})
export class PetformPageModule {}
