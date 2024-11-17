import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {
  private vaccines: { name: string; date: string }[] = [];

  constructor() { }

  
  createVaccine(vaccineData: { name: string, date: string }) {
    this.vaccines.push(vaccineData);
  }

 
  getVaccines() {
    return this.vaccines;
  }

 
  updateVaccine(index: number, updatedVaccine: { name: string, date: string }) {
    if (this.vaccines[index]) {
      this.vaccines[index] = updatedVaccine;
    }
  }


  deleteVaccine(index: number) {
    if (this.vaccines[index]) {
      this.vaccines.splice(index, 1);
    }
  }
}
