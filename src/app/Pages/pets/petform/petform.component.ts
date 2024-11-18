import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pet } from 'src/app/pages/pets/pets/pet.model';  // Asegúrate de crear un modelo Pet

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.scss'],
})
export class PetFormComponent implements OnInit {
  @Input() pet: Pet | null = null;  // Permite editar una mascota existente
  petForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.petForm = this.fb.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(1)]],
      breed: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    if (this.pet) {
      this.petForm.patchValue(this.pet);
    }
  }

  onSubmit() {
    if (this.petForm.valid) {
      const petData = this.petForm.value;
      console.log(petData);  // Aquí puedes emitir el formulario para guardarlo
    }
  }
}
