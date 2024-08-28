import { Component, input, Input, OnInit, SimpleChanges } from '@angular/core';
import { Question } from '../models/question.model';
import { QuestionnairOperationType } from '../models/questionnaire.model';
import { QuestionnairOperation } from '../models/questionnaire.model';

@Component({
    selector: 'qx-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
    @Input() question!: Question;
    @Input() setNo: boolean | undefined;
    @Input() operation!: QuestionnairOperation;

    collectAnswer: boolean = false;

    constructor() {}

    ngOnInit() {}

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);

        for (const propName in changes) {
            console.log('received ', propName);

            if (propName === 'operation') {
                const change = changes[propName];
                if (change.currentValue.isChangeToNextGroup()) {
                    this.collectAnswer = true;
                }
            }
        }
    }
}
