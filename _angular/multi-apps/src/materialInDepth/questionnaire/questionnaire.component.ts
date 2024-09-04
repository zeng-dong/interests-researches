import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from './models/questionnaire.service';
import { Questionnair } from './models/questionnaire.model';
import { QuestionnairOperation } from './models/questionnaire.model';
import { QuestionnaireConfig } from './models/question.model';

@Component({
    selector: 'qx-questionnaire',
    templateUrl: './questionnaire.component.html',
    styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit {
    qx!: Questionnair;
    operation: QuestionnairOperation;
    config: QuestionnaireConfig = {
        isCanngen: false,
        isMissourri: false,
        isEvenMoreSpecial: false,
    };

    constructor(private qxService: QuestionnaireService) {
        this.operation = qxService.createIdlingOperation();
    }

    ngOnInit() {
        this.qx = this.load(this.config);
    }

    payload: any;
    displayPayload() {
        this.payload = this.qxService.getPaperWork(this.qx);
    }

    collect() {
        this.operation = this.qxService.createChangeToNextGroupOperation();
    }

    reload = () => (this.qx = this.load(this.config));

    load = (config: QuestionnaireConfig): Questionnair =>
        this.qxService.getQuestionnaire(config);
}
