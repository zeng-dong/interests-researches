import { Component } from '@angular/core';
import { UnbackableComponent } from '../shared/unbackable.component';

@Component({
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent extends UnbackableComponent {
  public pageTitle = 'Welcome';
}
