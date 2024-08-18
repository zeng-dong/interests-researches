import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '../routingPlaybook/app.module';

export function runRoutingPlaybook() {
    platformBrowserDynamic()
        .bootstrapModule(AppModule)
        .catch((err) => console.error(err));
}
