import { Component, OnInit, signal, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, ProductStatus } from './product.model';
import { ProductsService } from './products.service';

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
    private productsService = inject(ProductsService);
    products = signal<Product[]>([]);
    productsCount = computed(() => this.products().length);
    status = signal<ProductStatus>({ type: 'idle' });

    ngOnInit(): void {
        this.status.set({ type: 'loading' });
        this.productsService.getProducts().subscribe({
            next: (products) => {
                this.products.set(products);
                this.status.set({ type: 'loaded' });
            },
            error: (error) => {
                this.status.set({ type: 'error', message: error.message });
            },
        });
    }
}
