import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from './models/questionnaire.service';
import { Questionnair, QuestionnairOperation } from './models/question.model';

@Component({
    selector: 'qx-questionnaire',
    templateUrl: './questionnaire.component.html',
    styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit {
    qx!: Questionnair;
    noToAll: boolean | undefined;
    operation: QuestionnairOperation;

    constructor(private qxService: QuestionnaireService) {
        this.operation = qxService.createIdlingOperation();
    }

    ngOnInit() {
        this.qx = this.qxService.getQuestionnaire();
    }

    payload: any;
    displayPayload() {
        this.payload = this.qxService.getPaperWork(this.qx);
    }

    collect() {
        this.operation = this.qxService.createChangeToNextGroupOperation();
    }
}
