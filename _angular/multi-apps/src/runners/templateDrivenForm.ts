import { AppModule } from '../tdf/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

export function runTemplateDrivenForms() {
    platformBrowserDynamic()
        .bootstrapModule(AppModule)
        .catch((err) => console.log(err));
}
