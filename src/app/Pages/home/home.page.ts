import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importa NavController para la navegación
import { Router } from '@angular/router';  // Importar Router




@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController, private router: Router) { }

  // Función para regresar a la página anterior
  goBack() {
    this.navCtrl.back(); // Vuelve a la página anterior
  }

  // Funciones para la navegación
  goToPetList() {
    this.navCtrl.navigateForward('/pet-list'); // Navega a la página de listado de mascotas
  }

  goToPetForm() {
    this.navCtrl.navigateForward('/pet-form'); // Navega a la página de registro de mascotas
  }

  goToVaccinePage() {
    this.router.navigate(['/vaccine']);
  }
}
