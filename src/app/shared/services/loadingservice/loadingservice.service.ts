import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingserviceService {

  constructor(private readonly loadingCtrl: LoadingController) { }

  public async show() {
    const loading = await this.loadingCtrl.create({});
    await loading.present();
  }

  public async dismiss() {
    await this.loadingCtrl.dismiss();
  }
}
