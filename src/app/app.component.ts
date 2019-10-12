import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  postCreate = new Date();
  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  posts = [
    {
      title: 'Mon premier post',
      content: 'Dynamically expedite client-centric potentialities through real-time resources. Appropriately ' +
        'harness highly efficient core.',
      loveIts: 0,
      created_at: this.postCreate,
    },
    {
      title: 'Mon deuxième post',
      content: 'Dynamically expedite client-centric potentialities through real-time resources. Appropriately ' +
        'harness highly efficient core.',
      loveIts: 0,
      created_at: this.postCreate,
    },
    {
      title: 'Encore un post',
      content: 'Dynamically expedite client-centric potentialities through real-time resources. Appropriately ' +
        'harness highly efficient core.',
      loveIts: 0,
      created_at: this.postCreate,
    }
  ];

  constructor() {
  }
}
