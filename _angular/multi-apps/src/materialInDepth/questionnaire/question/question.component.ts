import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../models/question';

@Component({
    selector: 'qx-q',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
    @Input() question: Question | undefined;

    constructor() {}

    ngOnInit() {}
}
