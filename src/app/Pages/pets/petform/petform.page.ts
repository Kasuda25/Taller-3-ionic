import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pet } from 'src/app/shared/services/database/database.service';


@Component({
  selector: 'app-petform',
  templateUrl: './petform.page.html',
  styleUrls: ['./petform.page.scss'],
})
export class PetformPage implements OnInit {
  @Input() pet: Pet | null = null;
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
    }
  }

}
