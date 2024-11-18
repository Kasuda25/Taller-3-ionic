import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { VaccinePageRoutingModule } from 'src/app/pages/vaccine/vaccine-routing.module';
import { VaccinePage } from './vaccine.page';
import { VaccineComponentComponent } from 'src/app/shared/components/button/vaccine-component/vaccine-component.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    VaccinePageRoutingModule,
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [VaccinePage, VaccineComponentComponent]
})
export class VaccinePageModule {}
