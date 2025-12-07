import { Component, OnInit, signal, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, ProductStatus } from './product.model';
import { Store } from '@ngrx/store';
import { productsPageOpened } from './state/products.actions';
import {
    selectProducts,
    selectProductsCount,
    selectProductsStatus,
} from './state/products.selectors';

@Component({
    selector: 'app-products-list',
    imports: [CommonModule],
    template: `
        <div>
            <h1>Products - Brought to you by NgRx</h1>

            @if (status().type === 'loading') {
            <div>Loading products...</div>
            } @if (status().type === 'error') {
            <div>Error: {{ status().message }}</div>
            } @if (status().type === 'loaded') {
            <div>
                @for (product of products(); track product.id) {
                <strong>{{ product.name }}</strong> - {{ product.price | currency }}
                <hr />
                }
                <p>Total: {{ productsCount() }} products</p>
            </div>
            }
        </div>
    `,
})
export class ProductsListComponent implements OnInit {
    private store = inject(Store);
    products = this.store.selectSignal(selectProducts);
    productsCount = this.store.selectSignal(selectProductsCount);
    status = this.store.selectSignal(selectProductsStatus);

    ngOnInit(): void {
        this.store.dispatch(productsPageOpened());

        this.store.select((state) => state).subscribe((s) => console.log('App State: ', s));
    }
}
