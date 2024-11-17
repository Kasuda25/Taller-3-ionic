import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { VaccineService } from '../../services/vaccine.service';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.page.html',
  styleUrls: ['./vaccine.page.scss'],
})
export class VaccinePage implements OnInit {
  vaccines: { name: string; date: string }[] = [];

  constructor(private router: Router, private vaccineService: VaccineService) { }

  ngOnInit() {
    this.vaccines = this.vaccineService.getVaccines();
  }

  goToVaccinePage() {
    this.router.navigate(['/vaccine-component']);  
  }

  addVaccine(vaccineData: { name: string; date: string }) {
    this.vaccineService.createVaccine(vaccineData);
    this.vaccines = this.vaccineService.getVaccines();
  }
}
