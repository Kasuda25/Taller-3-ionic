import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-vaccine-component',
  templateUrl: './vaccine-component.component.html',
  styleUrls: ['./vaccine-component.component.scss'],
})
export class VaccineComponentComponent  implements OnInit {


  ngOnInit() {}

  vaccineData = {
    name: '',
    date: ''
  };

  @Output() vaccineAdded = new EventEmitter<{ name: string; date: string }>();

  constructor() {}

  submitForm() {
    
    this.vaccineAdded.emit(this.vaccineData);

    this.vaccineData = { name: '', date: '' };
  }
}


