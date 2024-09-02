import { Component, input, Input, OnInit, SimpleChanges } from '@angular/core';
import { Question } from '../models/question.model';
import { QuestionnairOperationType } from '../models/questionnaire.model';
import { QuestionnairOperation } from '../models/questionnaire.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
    selector: 'qx-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
    @Input() question!: Question;
    @Input() setNo: boolean | undefined;
    @Input() operation!: QuestionnairOperation;

    color: ThemePalette = this.question?.hasAnswer() ? 'primary' : 'accent';

    collectAnswer: boolean = false;

    constructor() {}

    ngOnInit() {
        console.log(
            'in QuestionComponent received operation: ',
            this.operation
        );
    }

    ngOnChanges(changes: SimpleChanges) {
        for (const propName in changes) {
            if (propName === 'operation') {
                const change = changes[propName];
                console.log(
                    'operation changed, received by QuestionnaireSectionComponent: ',
                    this.operation
                );
                if (change.currentValue.isChangeToNextGroup()) {
                    this.collectAnswer = true;
                }
            }
        }
    }
}
