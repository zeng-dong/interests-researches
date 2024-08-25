import { Component, Input, OnInit } from '@angular/core';
import { Answer } from '../models/question';
import { MatRadioChange } from '@angular/material/radio';

@Component({
    selector: 'qx-a',
    templateUrl: './answer.component.html',
    styleUrls: ['./answer.component.scss'],
})
export class AnswerComponent implements OnInit {
    @Input() answer!: Answer;

    constructor() {}

    ngOnInit() {}

    selected($event: MatRadioChange) {
        console.log($event.value);

        this.answer.value = $event.value;
    }
}
