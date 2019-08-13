import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

loadinVar: any;

  constructor( private loadingCtrl: LoadingController ) { }

  ngOnInit() {
    this.presentLoading( 'Esperame tantito...' );

    setTimeout(() => {
      this.loadinVar.dismiss();
    }, 8000);

  }

  async presentLoading( mensaje: string ) {
    this.loadinVar = await this.loadingCtrl.create({
      message: mensaje
    });
    await this.loadinVar.present();

    const { role, data } = await this.loadinVar.onDidDismiss();

    console.log('Carga completada!');
  }

}
