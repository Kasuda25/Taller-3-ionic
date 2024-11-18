import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; 
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/Auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  
  constructor(private readonly navCtrl: NavController, private readonly authSrv: AuthService, private readonly router: Router) { }

  async ngOnInit() {
  }
  
  goBack() {
    this.navCtrl.back(); 
  }

  public async profile() {
    this.navCtrl.navigateForward("profile");
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
