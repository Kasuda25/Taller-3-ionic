import { Injectable } from '@angular/core';
import { Pet } from 'src/app/Pages/pets/pets/pet.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private pets: Pet[] = [];
  private petsSubject = new BehaviorSubject<Pet[]>(this.pets);

  constructor() {}

  getPets() {
    return this.petsSubject.asObservable();
  }

  addPet(pet: Pet) {
    this.pets.push(pet);
    this.petsSubject.next(this.pets);
  }

  updatePet(updatedPet: Pet) {
    const index = this.pets.findIndex((pet) => pet.id === updatedPet.id);
    if (index !== -1) {
      this.pets[index] = updatedPet;
      this.petsSubject.next(this.pets);
    }
  }

  getPetById(id: string): Pet | undefined {
    return this.pets.find((pet) => pet.id === id);
  }
}
