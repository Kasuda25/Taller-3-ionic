import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { FilePicker } from '@capawesome/capacitor-file-picker';
import { FileOpener } from '@capawesome/capacitor-file-opener';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'app-formulario-vacuna',
  templateUrl: './formulario-vacuna.component.html',
  styleUrls: ['./formulario-vacuna.component.scss'],
})
export class FormularioVacunaComponent {
  formularioVacuna: FormGroup;
  selectedFile: File | null = null;
  uploadedFileURL: string = '';

  constructor(
    private fb: FormBuilder,
    private toastController: ToastController,
    private fileUploadService: FileUploadService
  ) {
    this.formularioVacuna = this.fb.group({
      tipoVacuna: ['', Validators.required],
      nombreComercial: ['', Validators.required],
      fechaAplicacion: ['', Validators.required],
      numeroLote: ['', Validators.required],
      nombreVeterinario: ['', Validators.required],
      licenciaVeterinario: ['', Validators.required],
      certificadoVacunacion: [null],
    });
  }

  async seleccionarArchivo() {
    try {
      const result = await FilePicker.pickFiles({
        types: ['application/pdf'],
        multiple: false,
      });

      if (result.files.length > 0) {
        const fileBlob = result.files[0].blob;
        if (fileBlob) {
          this.selectedFile = new File([fileBlob], result.files[0].name, {
            type: 'application/pdf',
          });
          await this.mostrarVistaPrevia();
        }
      }
    } catch (error) {
      console.error('Error al seleccionar el archivo:', error);
    }
  }

  async mostrarVistaPrevia() {
    if (this.selectedFile) {
      await FileOpener.open({
        filePath: URL.createObjectURL(this.selectedFile),
        contentType: 'application/pdf',
      });
    }
  }

  async cargarArchivo() {
    if (this.selectedFile) {
      const path = `certificados/${new Date().getTime()}_${this.selectedFile.name}`;
      try {
        this.uploadedFileURL = await this.fileUploadService.uploadFile(
          this.selectedFile,
          path
        );
        await this.presentToast('Archivo subido exitosamente', 'success');
      } catch (error) {
        await this.presentToast('Error al subir el archivo', 'danger');
      }
    }
  }

  async enviarFormulario() {
    if (this.formularioVacuna.valid && this.uploadedFileURL) {
      const datos = { ...this.formularioVacuna.value, certificadoURL: this.uploadedFileURL };
      console.log('Datos del formulario:', datos);
      await this.presentToast('Formulario enviado correctamente', 'success');
    } else {
      await this.presentToast('Complete todos los campos y cargue el archivo', 'danger');
    }
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
    });
    await toast.present();
  }
}

