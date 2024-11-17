import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importar NavController

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.page.html',
  styleUrls: ['./pet-list.page.scss'],
})
export class PetListPage implements OnInit {
  pets = [
    { name: 'Rex' },
    { name: 'Bella' },
    { name: 'Max' }
  ]; // Ejemplo de lista de mascotas

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  // Función para ir hacia atrás
  goBack() {
    this.navCtrl.back(); // Navega hacia atrás
  }
}
