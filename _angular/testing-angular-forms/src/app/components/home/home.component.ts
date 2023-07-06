import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'angular unit testing';

  btnText = 'Subscribe';
  isSubscribed = false;

  constructor() {}

  subscribe() {
    this.isSubscribed = true;
    this.btnText = 'Subscribed';
  }
}
