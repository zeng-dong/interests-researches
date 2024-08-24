import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'multi-apps: this is app 3';

    response: any;

    constructor() {
        this.displayData();
    }

    async displayData() {
        try {
            this.response = await this.fetchData();
            console.log('response: ', this.response);
        } catch (e) {
            console.log(e);
        }
    }

    fetchData() {
        return new Promise((r) => {
            setTimeout(() => r('hello world'), 2000);
        });
    }
}
