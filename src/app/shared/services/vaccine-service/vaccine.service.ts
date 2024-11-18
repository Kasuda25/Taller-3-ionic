import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable, switchMap } from 'rxjs';
import { AuthService } from '../Auth/auth.service';

export interface Vaccine {
  id?: string;
  name: string;
  applicationDate: string;
  pet: string;
  certificate: string;
}

@Injectable({
  providedIn: 'root'
})
export class VaccineService {
  private vaccines: { name: string; date: string }[] = [];

  constructor(
    public fireStore: AngularFirestore,
    public authsrv: AuthService
  ) { }
  
  public  createVaccine(vaccineData: any): Promise<void> {
    const vaccineId = this.fireStore.createId();
    return this.fireStore
      .collection('vaccines')
      .doc(vaccineId)
      .set({ id: vaccineId, ...vaccineData });
  }
 
  getVaccinesByPet(petId: string): Observable<Vaccine[]> {
    return from(this.authsrv.isAuth()).pipe(
      switchMap((isAuth) => {
        if (isAuth) {
          return this.fireStore
            .collection<Vaccine>('vaccines', (ref) =>
              ref.where('pet', '==', `pets/${petId}`)
            )
            .valueChanges();
        } else {
          throw new Error('User not authenticated.');
        }
      })
    )
  }
 
  updateVaccine(index: number, updatedVaccine: { name: string, date: string }) {
    if (this.vaccines[index]) {
      this.vaccines[index] = updatedVaccine;
    }
  }

  deleteVaccine(index: number) {
    if (this.vaccines[index]) {
      this.vaccines.splice(index, 1);
    }
  }
}
