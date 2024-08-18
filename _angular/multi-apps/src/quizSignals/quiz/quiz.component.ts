import { Component } from '@angular/core';
import { QuestionComponent } from './components/question/question.component';

@Component({
    selector: 'quiz',
    templateUrl: './quiz.component.html',
    styleUrl: './quiz.component.scss',
    standalone: true,
    imports: [QuestionComponent],
})
export class QuizComponent {}
