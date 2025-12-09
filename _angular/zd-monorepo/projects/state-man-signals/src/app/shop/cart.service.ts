import { computed, effect, Injectable, signal } from '@angular/core';
import { IProduct } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly _cart = signal<IProduct[]>(this.loadFromStorage());
  readonly cart = this._cart.asReadonly();
  readonly itemCount = computed(() => this._cart().length);
  readonly subtotal = computed(
    () => this._cart().reduce((s, p) => s + p.price * (1 - (p.discount)), 0)
  );
  readonly taxRate = signal(0);
  readonly tax = computed(() => this.subtotal() * this.taxRate());
  readonly total = computed(() => this.subtotal() + this.tax());

  constructor() {
    effect(() => {
      const snapshot = this._cart()
      localStorage.setItem('cart', JSON.stringify(snapshot));
    });
    //could fetch taxRate here and update taxRate signal
  }

  addToCart(product: IProduct) {
    this._cart.update(cart => [...cart, product]);
  }

  removeFromCart(productId: number): void {
    this._cart.update(c => {
      const i = c.findIndex(p => p.id === productId);
      return i < 0 ? c : [...c.slice(0, i), ...c.slice(i + 1)];
    });
  }

  private loadFromStorage(): IProduct[] {
    try {
      const raw = localStorage.getItem('cart');
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
}
