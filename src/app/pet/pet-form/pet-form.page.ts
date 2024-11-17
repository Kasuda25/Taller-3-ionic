import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importar NavController
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Formulario reactivo

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.page.html',
  styleUrls: ['./pet-form.page.scss'],
})
export class PetFormPage implements OnInit {
  petForm: FormGroup;

  constructor(
    private navCtrl: NavController, // Inyectar NavController
    private fb: FormBuilder
  ) {
    this.petForm = this.fb.group({
      name: ['', Validators.required],
      // Otros campos del formulario
    });
  }

  ngOnInit() {}

  // Función para ir hacia atrás
  goBack() {
    this.navCtrl.back(); // Navega hacia atrás
  }

  onSubmit() {
    if (this.petForm.valid) {
      console.log('Formulario enviado:', this.petForm.value);
    }
  }
}
