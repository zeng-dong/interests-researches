import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '../quizSignals/app.config';
import { AppComponent } from '../quizSignals/app.component';

export function runQuizSignals() {
    bootstrapApplication(AppComponent, appConfig).catch((err) =>
        console.error(err)
    );
}
