import { Injectable } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';

@Injectable({
  providedIn: 'root',
})
export class LocalNotificationsService {
  async scheduleNotification(title: string, body: string, id: number, scheduleDate: Date): Promise<void> {
    await LocalNotifications.schedule({
      notifications: [
        {
          title: title,
          body: body,
          id: id,
          schedule: { at: scheduleDate },
        },
      ],
    });
  }
  async requestPermissions(): Promise<void> {
    const permissionStatus = await LocalNotifications.requestPermissions();

    if (permissionStatus.display !== 'granted') {
      console.error('Permisos denegados para notificaciones locales');
    } else {
      console.log('Permisos concedidos para notificaciones locales');
    }
  }
}
