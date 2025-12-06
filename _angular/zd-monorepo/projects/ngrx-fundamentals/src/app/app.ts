import { Component, signal } from '@angular/core';
import { ProductsListComponent } from './products/products-list.component';

@Component({
    selector: 'app-root',
    imports: [ProductsListComponent],
    template: ` <app-products-list /> `,
    styleUrl: './app.scss',
})
export class App {
    protected readonly title = signal('ngrx-fundamentals');
}
