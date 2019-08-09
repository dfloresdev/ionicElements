import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'filing',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'expand',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'happy',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'hand',
      name: 'Botones',
      redirectTo: '/botones'
    },
    {
      icon: 'logo-buffer',
      name: 'Cartas de info',
      redirectTo: '/card'
    },
    {
      icon: 'done-all',
      name: 'Checks',
      redirectTo: '/check'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
