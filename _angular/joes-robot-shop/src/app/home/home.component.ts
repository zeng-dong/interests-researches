import { Component, OnInit } from '@angular/core';
import { HappyDude } from './happy-dude';

@Component({
  selector: 'bot-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    const guy = new HappyDude();

    guy.sleep();
    guy.eat();
    guy.sing();
  }
}
