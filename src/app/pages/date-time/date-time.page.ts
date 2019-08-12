import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

fechaNac: Date = new Date();
customPickerOptions;
customDate;


  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: ( fecha ) => {
          console.log('Clicked Save!');
          console.log(fecha);
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    };
  }

  cambioEnFecha( event ) {
    console.log('Fecha seleccionada', new Date (event.detail.value) );
  }

}
