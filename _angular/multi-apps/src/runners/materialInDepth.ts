import { AppModule } from '../materialInDepth/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

export function runMaterialInDepth() {
    platformBrowserDynamic()
        .bootstrapModule(AppModule)
        .catch((err) => console.log(err));
}
