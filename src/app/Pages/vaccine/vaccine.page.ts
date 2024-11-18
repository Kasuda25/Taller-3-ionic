import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { Vaccine, VaccineService } from '../../shared/services/vaccine-service/vaccine.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { LoadingserviceService } from 'src/app/shared/controllers/loadingservice/loadingservice.service';
import { ToastService } from 'src/app/shared/controllers/toastservice/toastservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.page.html',
  styleUrls: ['./vaccine.page.scss'],
})
export class VaccinePage implements OnInit {
  vaccines$!: Observable<Vaccine[]>
  vaccines: Vaccine[] = [];
  petId: string | null = null;

  constructor(private router: Router, private vaccineService: VaccineService, private route: ActivatedRoute, private navCtrl: NavController,
    private alertController: AlertController, private loadingSrv: LoadingserviceService, private toastSrv: ToastService) { }

  ngOnInit() {
    this.petId = this.route.snapshot.paramMap.get('id');
    this.loadVaccines();
  }

  private async loadVaccines() {
    try {
      if (!this.petId) {
        throw new Error('El ID de la mascota no está definido.');
      }
      await this.loadingSrv.show();
      this.vaccines$ = this.vaccineService.getVaccinesByPet(this.petId);
      this.vaccines$.subscribe((data) => {
        this.vaccines = data;
      });
    } catch (error) {
      console.error('Error al cargar las vacunas de la macota:', error);
    } finally {
      await this.loadingSrv.dismiss();
    }
  }

  async onAddVaccine() {
    const alert = await this.alertController.create({
      header: 'Agregar Vacuna',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Nombre de la vacuna',
        },
        {
          name: 'date',
          type: 'date',
          placeholder: 'Fecha de aplicación',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Agregar',
          handler: async (data) => {
            if (data.name && data.date) {
              await this.loadingSrv.show();
              const newVaccine = { name: data.name, applicationDate: data.date, pet: `pets/${this.petId}` };
              this.vaccineService.createVaccine(newVaccine);
              this.loadVaccines(); 
              this.loadingSrv.dismiss();
              this.toastSrv.presentToast("Vacuna agregada", "success", "checkmark");
              // this.navCtrl.navigateForward(`/petform/${this.petId}`);
            }
          },
        },
      ],
    });
    await alert.present();
  }

  async onEditVaccine(index: number) {
    const currentVaccine = this.vaccines[index];
    const alert = await this.alertController.create({
      header: 'Editar Vacuna',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Nombre de la vacuna',
          value: currentVaccine.name,
        },
        {
          name: 'date',
          type: 'date',
          placeholder: 'Fecha de aplicación',
          value: currentVaccine.applicationDate,
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Guardar',
          handler: (data) => {
            if (data.name && data.date) {
              this.vaccineService.updateVaccine(index, data);
              this.loadVaccines(); 
            }
          },
        },
      ],
    });

    await alert.present();
  }
  onDeleteVaccine(index: number) {
    this.vaccineService.deleteVaccine(index);
    this.loadVaccines(); 
  }

  public async profile() {
    this.navCtrl.navigateForward("profile");
  }

  goBack() {
    this.navCtrl.back();
  }
  
}
