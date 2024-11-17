import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.page.html',
  styleUrls: ['./vaccine.page.scss'],
})
export class VaccinePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToVaccinePage() {
    this.router.navigate(['/vaccine-form']);  
  }
}
