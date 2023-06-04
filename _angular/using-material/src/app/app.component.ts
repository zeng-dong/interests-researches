import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.request = {};
    this.request.person = { name: 'zeng', age: 5 };

    console.log(this.request);
  }
  title = 'using-material';

  request: any;
}
