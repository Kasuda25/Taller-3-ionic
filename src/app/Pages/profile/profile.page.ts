import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/Auth/auth.service';
import { LoadingserviceService } from 'src/app/shared/controllers/loadingservice/loadingservice.service';
import { ToastService } from 'src/app/shared/controllers/toastservice/toastservice.service';
import { DatabaseService } from 'src/app/shared/services/database/database.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  isDisabled = true;
  user: any;
  public id: string = "";
  public name!: FormControl;
  public lastName!: FormControl;
  public email!: FormControl;
  public phone!: FormControl;
  public age!: FormControl;
  public image!: FormControl;
  public profileForm!: FormGroup;

  constructor(private readonly authSrv: AuthService, private readonly dbSrv: DatabaseService, private readonly loadingSrv: LoadingserviceService, private readonly navCtrl: NavController, private readonly toastSrv: ToastService) { }

  async ngOnInit() {
    this.initForm();

    this.id = await this.authSrv.getCurrentUid();

    this.getUserData();

  }

  private async getUserData() {
    await this.loadingSrv.show();
    this.dbSrv.getUserByUid(this.id).subscribe(
      async data => {
        this.user = data;

        // this.image.setValue(this.user.image);
        if (this.user) {
          this.profileForm.patchValue({
            name: this.user.name || '',
            lastName: this.user.lastName || '',
            email: await this.authSrv.getEmail() || '',
            age: this.user.age || '',
            phone: this.user.phone || '',
            image: this.user.image || ''
          });
        }
        await this.loadingSrv.dismiss();
      },
      async (error) => {
        console.error(error);
        await this.loadingSrv.dismiss();
      }
    );
  }

  goBack() {
    this.navCtrl.back();
  }

  public async logOut() {
    await this.loadingSrv.show();
    await this.authSrv.logOut();
    await this.loadingSrv.dismiss();
    this.navCtrl.navigateForward("");
    await this.toastSrv.presentToast("Session has been closed", "success", "checkmark");
  }

  public async update() {
    this.navCtrl.navigateForward(`register/${this.id}`);
  }

  private initForm() {
    this.image = new FormControl('');
    this.name = new FormControl('');
    this.lastName = new FormControl('');
    this.email = new FormControl('');
    this.age = new FormControl('');
    this.phone = new FormControl('');

    this.profileForm = new FormGroup({
      image: this.image,
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      age: this.age,
      phone: this.phone
    });
  }

}
