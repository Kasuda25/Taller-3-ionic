import { NgModule } from '@angular/core';
import { PetlistPageRoutingModule } from './petlist-routing.module';
import { PetlistPage } from './petlist.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    PetlistPageRoutingModule
  ],
  declarations: [PetlistPage]
})
export class PetlistPageModule {}
