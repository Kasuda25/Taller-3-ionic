import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { NavController } from '@ionic/angular'; 
import { DatabaseService, Pet } from 'src/app/shared/services/database/database.service';
=======
import { DatabaseService } from 'src/app/shared/services/database/database.service';
import { Pet } from 'src/app/shared/services/database/database.service';
import { NavController } from '@ionic/angular';
>>>>>>> 7078af84e378c4d6a704a4b0071b1775231092d4
import { AuthService } from 'src/app/shared/services/Auth/auth.service';
import { LoadingserviceService } from 'src/app/shared/controllers/loadingservice/loadingservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-petlist',
  templateUrl: './petlist.page.html',
  styleUrls: ['./petlist.page.scss'],
})
export class PetlistPage implements OnInit {
  userPets$!: Observable<Pet[]>;  // Esta es la propiedad que necesitas

  constructor(
<<<<<<< HEAD
    private readonly dbSrv: DatabaseService,
    private readonly authSrv: AuthService,
    private readonly loadingSrv : LoadingserviceService,
    private readonly navCtrl: NavController
  ) { }
=======
    private petService: DatabaseService,
    private navCtrl: NavController,
    private authSrv: AuthService,
    private loadingSrv: LoadingserviceService
  ) {}
>>>>>>> 7078af84e378c4d6a704a4b0071b1775231092d4

  async ngOnInit() {
    await this.loadUserPets();
  }

  private async loadUserPets() {
<<<<<<< HEAD
    await this.loadingSrv.show();
    const owner = await this.authSrv.getCurrentUid();
    this.userPets$ = this.dbSrv.getUserPets(owner);
    await this.loadingSrv.dismiss();
  }

  public async profile() {
    this.navCtrl.navigateForward("profile");
  }

  goBack() {
    this.navCtrl.back();
=======
    try {
      await this.loadingSrv.show();
      const ownerId = await this.authSrv.getCurrentUid();
      this.userPets$ = this.petService.getUserPets(ownerId);  // Asignación correcta de la propiedad
    } catch (error) {
      console.error('Error al cargar las mascotas del usuario:', error);
    } finally {
      await this.loadingSrv.dismiss();
    }
>>>>>>> 7078af84e378c4d6a704a4b0071b1775231092d4
  }

  onEdit(pet: Pet) {
    console.log('Editar mascota:', pet);
  }

  onViewVaccines(event: Event, pet: Pet) {
    event.stopPropagation();
    this.navCtrl.navigateForward(`/vaccine/${pet.id}`);
  }
}
