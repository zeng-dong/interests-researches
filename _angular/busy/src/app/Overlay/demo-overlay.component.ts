import {
  Overlay,
  CdkOverlayOrigin,
  OverlayConfig,
  OverlayRef,
} from '@angular/cdk/overlay';

import { Component } from '@angular/core';

@Component({
  selector: 'demo-overlay',
  templateUrl: 'demo-overlay.component.html',
  styleUrls: ['demo-overlay.component.scss'],
})
export class AppOverlayComponent {
  isOverlayOpen = false;
}
