import {
    ApplicationConfig,
    provideBrowserGlobalErrorListeners,
    provideZonelessChangeDetection,
} from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { productsReducer } from './products/state/products.reducers';
import * as productsEffects from './products/state/products.effects';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideZonelessChangeDetection(),
        provideStore({ products: productsReducer }),
        provideEffects(productsEffects),
    ],
};
