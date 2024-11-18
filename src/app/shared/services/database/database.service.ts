import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(
    public fireStore: AngularFirestore,
    public authsrv: AuthService
  ) {}

  public addUser(uid: string, userData: any) {
    return this.fireStore.collection('users').doc(uid).set(userData);
  }

  public getUserByUid(uid: string): Observable<any> {
    return this.fireStore.collection('users').doc(uid).valueChanges();
  }

  public async updateUser(uid: string, updatedUserData: any): Promise<void> {
    try {
      await this.fireStore.collection('users').doc(uid).update(updatedUserData);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public addPet(petData: any): Promise<void> {
    const petId = this.fireStore.createId();
    return this.fireStore
      .collection('pets')
      .doc(petId)
      .set({ id: petId, ...petData });
  }

  public getPets(): Observable<any[]> {
    return this.fireStore.collection('pets').valueChanges();
  }

  public getPetById(petId: string): Observable<any> {
    return this.fireStore.collection('pets').doc(petId).valueChanges();
  }

  public async updatePet(petId: string, updatedPetData: any): Promise<void> {
    try {
      await this.fireStore.collection('pets').doc(petId).update(updatedPetData);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public async deletePet(petId: string): Promise<void> {
    try {
      await this.fireStore.collection('pets').doc(petId).delete();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
