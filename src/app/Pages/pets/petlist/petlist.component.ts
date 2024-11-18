import { Component, OnInit } from '@angular/core';
import { PetService } from '../services/pet.service';
import { Pet } from 'src/app/pages/pets/pets/pet.model';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss'],
})
export class PetListComponent implements OnInit {
  pets: Pet[] = [];

  constructor(private petService: PetService) {}

  ngOnInit() {
    this.petService.getPets().subscribe((pets) => {
      this.pets = pets;
    });
  }

  onEdit(pet: Pet) {
    console.log('Editar mascota', pet);
    // Puedes redirigir a un formulario con los datos de la mascota para editar
  }
}
