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
  title = 'hi there';
  spinnerValue = 0;
  busy = true;

  constructor(private meta: Meta) {}

  ngOnInit() {
    interval(1000).subscribe((x) => {
      this.busy = !this.busy;
    });
  }

  updateMeta(route: string) {
    if (Object.prototype.hasOwnProperty.call(META_INFO, route)) {
      const { title, description } = META_INFO[route];
      this.updateTitle(title);
      this.updateDescription(description);
    }
  }

  updateTitle(title: string) {
    if (title) {
      this.title = title;
    }
  }

  updateDescription(description: string) {
    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
    }
  }
}
