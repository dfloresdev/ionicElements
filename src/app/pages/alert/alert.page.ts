import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor( public alertCtrl: AlertController) { }

  titulo: string;

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      backdropDismiss: false,
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Botón cancelar');
          }
        },
        {
          text: 'Okay',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Botón okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Nombre!',
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Ingresa tú nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: ( data ) => {
            console.log('Confirm Ok', data);
            this.titulo = data.txtNombre;
          }
        }
      ]
    });

    await alert.present();
  }

}
