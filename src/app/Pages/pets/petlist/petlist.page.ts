import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/shared/services/database/database.service';
import { Pet } from '../pets/pet.model';

@Component({
  selector: 'app-petlist',
  templateUrl: './petlist.page.html',
  styleUrls: ['./petlist.page.scss'],
})
export class PetlistPage implements OnInit {
  userPets$!: Observable<Pet[]>;

  constructor(private petService: DatabaseService) { }

  async ngOnInit() {
    this.loadUserPets();
  }

  private async loadUserPets() {
    await this.loadingSrv.show();
    const owner = await this.authSrv.getCurrentUid();
    this.userPets$ = this.dbSrv.getUserPets(owner);
    await this.loadingSrv.dismiss();
    
  }

  onEdit(pet: Pet) {
    console.log('Editar mascota', pet);
  }

  onViewVaccines(event: Event, pet: Pet) {
    event.stopPropagation();
    this.navCtrl.navigateForward(`/vaccine/${pet.id}`);
  }
 
}
