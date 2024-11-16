import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private readonly fbStorage: AngularFireStorage) { }

  public async uploadFileAndGetUrl(path: String, file: File) {
    try {
      const name = `${path}/${Date.now()}-${file.name}`;
      const uploaded = await this.fbStorage.upload(name, file);
      const url = await uploaded.ref.getDownloadURL();
      return url
    } catch (error) {
      throw error;
    }
  }
}
