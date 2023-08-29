import { Component, ViewEncapsulation } from '@angular/core';
import { GlobalLoaderService } from './global-loader.service';

@Component({
  selector: 'global-spinner',
  templateUrl: './global-spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class SpinnerComponent {
  constructor(public loader: GlobalLoaderService) {}
}
