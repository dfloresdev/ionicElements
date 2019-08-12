import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data = [
    {
      name: 'primary',
      selected: false
    },
    {
      name: 'secondary',
      selected: true
    },
    {
      name: 'success',
      selected: false
    },
    {
      name: 'tertiary',
      selected: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick( check ) {
    console.log(check);
  }

}