import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  datos = {
    nombre: 'Pablo',
    pais: 'Japon'
  };

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  async abrirModal() {
    const modalo = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'David',
        pais: 'México'
      }
    });

    await modalo.present();

    const { data } = await modalo.onDidDismiss();
    this.datos = data;

    console.log('info pasada al padre', data);

  }

}
