import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material-module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionComponent } from './questionnaire/question/question.component';
import { AnswerComponent } from './questionnaire/answer/answer.component';
import { QuestionnaireSectionComponent } from './questionnaire/section/questionnaire-section.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        QuestionnaireComponent,
        QuestionnaireSectionComponent,
        QuestionComponent,
        AnswerComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
