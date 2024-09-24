import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Question } from '../models/question.model';
import { QuestionnairOperation } from '../models/questionnaire.model';
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

    ngOnInit() {}

    ngOnChanges(changes: SimpleChanges) {
        for (const propName in changes) {
            if (propName === 'operation') {
                const change = changes[propName];

                if (change.currentValue.isChangeToNextGroup()) {
                    this.collectAnswer = true;
                }
                this.testTrigger();
            }
        }
    }

    getLabel() {
        if (this.question.label) return `${this.question.label} . ${this.question.text}`;
        //return this.question.text;
        return null;
    }

    get triggered(): boolean {
        const trigger = this.question.trigger;
        if (!trigger) return false;

        return trigger(this.question);
    }

    testTrigger(): void {
        const trigger = this.question.trigger;
        if (trigger) console.log('invoking trigger func and the result: ', trigger(this.question));
    }
}
