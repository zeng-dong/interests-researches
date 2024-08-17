import { Component } from '@angular/core';
import { QuestionComponent } from './components/question/question.component';
import { AnswerComponent } from './components/answer/answer.component';

@Component({
    selector: 'quiz',
    templateUrl: './quiz.component.html',
    styleUrl: './quiz.component.scss',
    standalone: true,
    imports: [QuestionComponent, AnswerComponent]
})
export class QuizComponent {}
