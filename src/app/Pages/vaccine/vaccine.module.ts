import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { VaccinePageRoutingModule } from 'src/app/pages/vaccine/vaccine-routing.module';
import { VaccinePage } from './vaccine.page';
import { VaccineComponentComponent } from 'src/app/shared/components/button/vaccine-component/vaccine-component.component';

@NgModule({
  imports: [
    SharedModule,
    VaccinePageRoutingModule,
  ],
  declarations: [VaccinePage, VaccineComponentComponent]
})
export class VaccinePageModule {}
