import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; 
import { Router } from '@angular/router';  





@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController, private router: Router) { }

  
  goBack() {
    this.navCtrl.back(); 
  }

  
  goToPetList() {
    this.navCtrl.navigateForward('/petlist'); 
  }

  goToPetForm() {
    this.navCtrl.navigateForward('/petform'); 
  }

  goToVaccinePage() {
    this.router.navigate(['/vaccine']);
  }
}
