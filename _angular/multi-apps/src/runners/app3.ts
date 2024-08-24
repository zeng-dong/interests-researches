import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '../app3/app.config';
import { AppComponent } from '../app3/app.component';

export function runApp3() {
    bootstrapApplication(AppComponent, appConfig).catch((err) =>
        console.error(err)
    );
}
