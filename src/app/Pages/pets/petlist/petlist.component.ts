import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/shared/services/database/database.service';
import { Pet } from 'src/app/pages/pets/pets/pet.model';

@Component({
  selector: 'app-pet-list',
  templateUrl: './petlist.component.html',
  styleUrls: ['./petlist.component.scss'],
})
export class PetListComponent implements OnInit {
  pets: Pet[] = [];

  constructor(private petService: DatabaseService) {}

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
