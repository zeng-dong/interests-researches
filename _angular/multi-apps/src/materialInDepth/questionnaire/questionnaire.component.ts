import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from './models/questionnaire.service';
import { Questionnair } from './models/question';

@Component({
    selector: 'home',
    templateUrl: './questionnaire.component.html',
    styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit {
    qx!: Questionnair;

    constructor(private qxService: QuestionnaireService) {}

    ngOnInit() {
        this.qx = this.qxService.getQuestionnaire();
    }
}
