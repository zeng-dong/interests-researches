import { bootstrapApplication } from '@angular/platform-browser';

import { appConfig } from '../appNumberTwo/app.config';
import { AppComponent } from '../appNumberTwo/app.component';

export function runApp2() {
    bootstrapApplication(AppComponent, appConfig).catch((err) =>
        console.error(err)
    );
}
