import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteHeader } from "./site-header/site-header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'joes-robot-shop';
}
