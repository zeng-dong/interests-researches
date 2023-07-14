import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { META_INFO } from './meta.config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'hi there';
  spinnerValue = 0;


  constructor(private meta: Meta) {}

  ngOnInit() {
    this.meta.updateTag({ name: 'title', content: '' });
    this.meta.updateTag({ name: 'description', content: 'Lorem ipsum dolor' });
    this.meta.updateTag({ name: 'image', content: './assets/blog-image.jpg' });
    this.meta.updateTag({ name: 'site', content: 'My Site' });

    this.updateMeta('/about');
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
