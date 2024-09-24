import { Component, input, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Question } from '../models/question.model';
import { QuestionnairOperation } from '../models/questionnaire.model';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
    selector: 'qx-answer',
    templateUrl: './answer.component.html',
    styleUrls: ['./answer.component.scss'],

    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class AnswerComponent implements OnInit {
    @Input() collectAnswer: boolean = false;
    @Input() question!: Question;
    @Input() operation!: QuestionnairOperation;
    collecting = false;

    constructor() {}

    ngOnInit() {}

    selected($event: MatRadioChange) {
        //// two way binding so I don't have to do it
        //console.log($event.value);
        //if (this.question.answer) this.question.answer.value = $event.value;
    }

    ngOnChanges(changes: SimpleChanges) {
        for (const propName in changes) {
            if (propName === 'operation') {
                const change = changes[propName];
                if (change.currentValue.isChangeToNextGroup()) {
                    this.collecting = true;
                }
            }
        }
    }

    //// I can use this to execute validation or formatting
    valueChanged($event: any) {
        console.log('in Answer value changed: ', $event);
    }
}
