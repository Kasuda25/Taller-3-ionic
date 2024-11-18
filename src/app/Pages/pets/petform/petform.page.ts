import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { DatabaseService, Pet } from 'src/app/shared/services/database/database.service';
import { AuthService } from 'src/app/shared/services/Auth/auth.service';
import { LoadingserviceService } from 'src/app/shared/controllers/loadingservice/loadingservice.service';
import { ToastService } from 'src/app/shared/controllers/toastservice/toastservice.service';

@Component({
  selector: 'app-petform',
  templateUrl: './petform.page.html',
  styleUrls: ['./petform.page.scss'],
})

export class PetformPage implements OnInit {
  @Input() pet: Pet | null = null;
  petForm: FormGroup;
  owner: any;

  constructor(
    private fb: FormBuilder,
    private readonly authSrv: AuthService,
    private readonly dbSrv: DatabaseService,
    private readonly loadingSrv: LoadingserviceService,
    private readonly toastSrv: ToastService,
    private readonly navCtrl: NavController
  ) {
    this.petForm = this.fb.group({
      name: ['', [Validators.required]],
      breed: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(1)]],
    });
  }

  async ngOnInit() {
    if (this.pet) {
      this.petForm.patchValue(this.pet);
    }
  }

  async onSubmit() {
    this.owner = await this.authSrv.getCurrentUid();
    if (this.petForm.valid) {
      await this.loadingSrv.show();
      const petData = {owner: this.owner, ...this.petForm.value};
      await this.dbSrv.addPet(petData);
      await this.loadingSrv.dismiss();
      await this.toastSrv.presentToast('Se ha añadido a tu mascota.', 'success', 'checkmark');
      this.navCtrl.back();
    }
  }

  public async profile() {
    this.navCtrl.navigateForward("profile");
  }

  goBack() {
    this.navCtrl.back();
  }
}
