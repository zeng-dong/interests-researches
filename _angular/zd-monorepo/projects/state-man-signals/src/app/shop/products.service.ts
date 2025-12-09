import { computed, effect, Injectable, ResourceStatus, signal } from '@angular/core';
import { IProduct } from './product.model';
import { httpResource, HttpResourceRef } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private resource: HttpResourceRef<IProduct[] | undefined> = httpResource(() => '/api/products');

  readonly products = computed(() => this.resource.hasValue() ? (this.resource.value() ?? []) : []);
  readonly status = computed<ResourceStatus>(() => this.resource.status());
  readonly isLoading = computed(() => this.resource.isLoading());
  readonly error = computed(() => this.resource.error());
  readonly lastUpdated = signal<Date | undefined>(undefined);

  constructor() {
    effect(() => {
      if (this.resource.status() === 'resolved') {
        this.lastUpdated.set(new Date());
      }
    })
  }

  refresh(): void {
    this.resource.reload();
  }

}
