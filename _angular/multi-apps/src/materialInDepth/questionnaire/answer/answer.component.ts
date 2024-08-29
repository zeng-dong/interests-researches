import { Component, input, Input, OnInit, SimpleChanges } from '@angular/core';
import { Answer } from '../models/answer.model';
import { MatRadioChange } from '@angular/material/radio';
import { CompositeQuestion, Question } from '../models/question.model';

@Component({
    selector: 'qx-answer',
    templateUrl: './answer.component.html',
    styleUrls: ['./answer.component.scss'],
})
export class AnswerComponent implements OnInit {
    @Input() answer!: Answer;
    @Input() collectAnswer: boolean = false;
    @Input() question!: Question;
    collecting = false;

    simpleChildQuestin: Question | undefined;
    compositeChildQuestion: CompositeQuestion | undefined;


    constructor() {}

    ngOnInit() {
        console.log('ngOnInit, get question: ', this.question);
        if ( this.question.hasChildQuestion() ){
            if ( this.question.secondary?.isCompositeQuestion ){
                this.compositeChildQuestion = this.question.secondary as unknown as CompositeQuestion;
            }
            else if ( this.question.secondary)
        }
    }

    selected($event: MatRadioChange) {
        console.log($event.value);

        if (this.answer) this.answer.value = $event.value;
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('AnswerComponent received: ', changes);

        for (const propName in changes) {
            if (propName === 'collectAnswer') {
                const change = changes[propName];
                if (!change.previousValue && change.currentValue) {
                    this.collecting = true;
                }
            }
        }
    }

    valueChanged($event: any) {
        console.log('in Answer value changed: ', $event);
    }
}
