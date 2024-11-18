import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/shared/services/database/database.service';
import { Pet } from '../pets/pet.model';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-petlist',
  templateUrl: './petlist.page.html',
  styleUrls: ['./petlist.page.scss'],
})
export class PetlistPage implements OnInit {
  pets: Pet[] = [];


  constructor(private petService: DatabaseService, private navCtrl: NavController) { }

  ngOnInit() {
    this.petService.getPets().subscribe((pets) => {
      this.pets = pets;
    });
  }

  onEdit(pet: Pet) {
    console.log('Editar mascota', pet);
  }

  onViewVaccines(event: Event, pet: Pet) {
    event.stopPropagation();
    this.navCtrl.navigateForward(`/vaccine/${pet.id}`);
  }
 
}
