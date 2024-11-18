import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; 
import { DatabaseService, Pet } from 'src/app/shared/services/database/database.service';
import { AuthService } from 'src/app/shared/services/Auth/auth.service';
import { Observable } from 'rxjs';
import { LoadingserviceService } from 'src/app/shared/controllers/loadingservice/loadingservice.service';

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
    this.loadUserPets();
  }

  private async loadUserPets() {
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
  }

  onEdit(pet: Pet) {
    console.log('Editar mascota', pet);
  }
}
