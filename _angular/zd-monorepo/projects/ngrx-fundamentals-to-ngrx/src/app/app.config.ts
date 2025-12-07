import {
    ApplicationConfig,
    provideBrowserGlobalErrorListeners,
    provideZonelessChangeDetection,
} from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { productsReducer } from './products/state/products.reducers';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideZonelessChangeDetection(),
        provideStore({ products: productsReducer }),
        provideEffects(),
    ],
};
