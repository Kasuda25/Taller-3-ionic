import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/shared/services/database/database.service';
import { Pet } from 'src/app/shared/services/database/database.service';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/services/Auth/auth.service';
import { LoadingserviceService } from 'src/app/shared/controllers/loadingservice/loadingservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-petlist',
  templateUrl: './petlist.page.html',
  styleUrls: ['./petlist.page.scss'],
})
export class PetlistPage implements OnInit {
  userPets$!: Observable<Pet[]>;

  constructor(
    private readonly dbSrv: DatabaseService,
    private readonly authSrv: AuthService,
    private readonly loadingSrv : LoadingserviceService,
    private readonly navCtrl: NavController
  ) { }

  async ngOnInit() {
    await this.loadUserPets();
  }

  private async loadUserPets() {
    try {
      await this.loadingSrv.show();
      const ownerId = await this.authSrv.getCurrentUid();
      this.userPets$ = this.dbSrv.getUserPets(ownerId);
    } catch (error) {
      console.error('Error al cargar las mascotas del usuario:', error);
    } finally {
      await this.loadingSrv.dismiss();
    }
  }

  onEdit(pet: Pet) {
    console.log('Editar mascota:', pet);
  }

  onViewVaccines(event: Event, pet: Pet) {
    event.stopPropagation();
    this.navCtrl.navigateForward(`/vaccine/${pet.id}`);
  }

  public async profile() {
    this.navCtrl.navigateForward("profile");
  }

  goBack() {
    this.navCtrl.back();
  }
}
