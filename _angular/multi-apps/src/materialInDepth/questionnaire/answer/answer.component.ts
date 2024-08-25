import { Component, input, Input, OnInit, SimpleChanges } from '@angular/core';
import { Answer } from '../models/answer';
import { MatRadioChange } from '@angular/material/radio';

@Component({
    selector: 'qx-answer',
    templateUrl: './answer.component.html',
    styleUrls: ['./answer.component.scss'],
})
export class AnswerComponent implements OnInit {
    @Input() answer!: Answer;
    @Input() collectAnswer: boolean = false;
    collecting = false;

    constructor() {}

    ngOnInit() {}

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
}
