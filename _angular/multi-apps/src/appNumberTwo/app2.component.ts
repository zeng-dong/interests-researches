import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app2-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app2.component.html',
  styleUrl: './app2.component.css',
})
export class App2Component {
  title = 'this is the 2nd app';
}
