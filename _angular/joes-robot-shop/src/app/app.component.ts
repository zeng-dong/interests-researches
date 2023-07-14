import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { META_INFO } from './meta.config';
import { interval } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  spinnerValue = 0;
  busy = true;

  constructor(private meta: Meta) {}

  ngOnInit() {
    // interval(1000).subscribe((x) => {
    //   this.busy = !this.busy;
    // });
    this.loadSpinner();
  }

  loadSpinner() {
    this.spinnerValue = 100;
    const timer$ = interval(1000);
    const spinnerSubscription = timer$.subscribe(() => {
      if (this.spinnerValue === 1000) {
        spinnerSubscription.unsubscribe();
        this.resetBusy();
      } else {
        this.spinnerValue = this.setNextValue(this.spinnerValue);
      }
    });
  }

  setNextValue(v: number): number {
    return v + Math.floor(this.random() * 5);
  }

  resetBusy() {
    this.busy = false;
    this.spinnerValue = 0;
  }

  random(): number {
    return crypto.getRandomValues(new Uint8Array(1))[0] / Math.pow(2, 8);
  }

  updateMeta(route: string) {
    if (Object.prototype.hasOwnProperty.call(META_INFO, route)) {
      const { title, description } = META_INFO[route];
      this.updateDescription(description);
    }
  }

  updateDescription(description: string) {
    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
    }
  }
}
