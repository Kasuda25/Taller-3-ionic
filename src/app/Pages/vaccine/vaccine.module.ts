import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { VaccinePageRoutingModule } from 'src/app/Pages/vaccine/vaccine-routing.module';
import { VaccinePage } from './vaccine.page';
import { VaccineComponentComponent } from 'src/app/vaccine-component/vaccine-component.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VaccinePageRoutingModule,
    
  ],
  declarations: [VaccinePage, VaccineComponentComponent]
})
export class VaccinePageModule {}
