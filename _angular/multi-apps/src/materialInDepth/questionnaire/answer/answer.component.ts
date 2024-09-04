import { Component, input, Input, OnInit, SimpleChanges } from '@angular/core';
import { Answer } from '../models/answer.model';
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
        console.log($event.value);

        if (this.question.answer) this.question.answer.value = $event.value;
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

    valueChanged($event: any) {
        console.log('in Answer value changed: ', $event);
    }
}
