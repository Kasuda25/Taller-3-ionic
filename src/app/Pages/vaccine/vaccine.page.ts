import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { VaccineService } from '../../shared/services/vaccine-service/vaccine.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.page.html',
  styleUrls: ['./vaccine.page.scss'],
})
export class VaccinePage implements OnInit {
  vaccines: { name: string; date: string }[] = [];
  petId: string | null = null;

  constructor(private router: Router, private vaccineService: VaccineService, private route: ActivatedRoute, private navCtrl: NavController,
    private alertController: AlertController,) { }

  ngOnInit() {
    this.petId = this.route.snapshot.paramMap.get('id');
    this.loadVaccines();
  }

  loadVaccines() {
    this.vaccines = this.vaccineService.getVaccines();
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
          handler: (data) => {
            if (data.name && data.date) {
              this.vaccineService.createVaccine(data);
              this.loadVaccines(); 
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
          value: currentVaccine.date,
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
  
}
