import { Component } from '@angular/core';
import { LoadingService } from './loading.service';
import { LoadingChService } from './loading.service.ch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'busy';
  isOpen = false;

  loading$ = this.loader.loading$;
  constructor(
    public loader: LoadingService,
    public loadingChService: LoadingChService
  ) {
    //window['nx_loading'] = this.loadingChService;
  }
}
