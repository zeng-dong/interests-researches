import { Component, input, Input, OnInit, SimpleChanges } from '@angular/core';
import { Question } from '../models/question';

@Component({
    selector: 'qx-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
    @Input() question!: Question;
    @Input() setNo: boolean | undefined;
    @Input() collectAnswers: boolean = false;

    collectAnswer: boolean = false;

    constructor() {}

    ngOnInit() {}

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);

        for (const propName in changes) {
            console.log('received ', propName);

            if (propName === 'collectAnswers') {
                const change = changes[propName];
                if (change.currentValue && !change.previousValue) {
                    this.collectAnswer = true;
                }
            }

            //const cur = JSON.stringify(chng.currentValue);

            //const prev = JSON.stringify(chng.previousValue);
            // this.changeLog.push(
            //     `${propName}: currentValue = ${cur}, previousValue = ${prev}`
            // );
        }
    }
}
