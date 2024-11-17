import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {
  private vaccines: { name: string; date: string }[] = [];

  constructor() { }

  // Crear vacuna
  createVaccine(vaccineData: { name: string, date: string }) {
    this.vaccines.push(vaccineData);
  }

  // Obtener todas las vacunas
  getVaccines() {
    return this.vaccines;
  }

  // Actualizar una vacuna
  updateVaccine(index: number, updatedVaccine: { name: string, date: string }) {
    if (this.vaccines[index]) {
      this.vaccines[index] = updatedVaccine;
    }
  }

  // Eliminar una vacuna
  deleteVaccine(index: number) {
    if (this.vaccines[index]) {
      this.vaccines.splice(index, 1);
    }
  }
}
