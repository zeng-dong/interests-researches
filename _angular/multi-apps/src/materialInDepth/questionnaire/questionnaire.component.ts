import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from './models/questionnaire.service';
import { Questionnair } from './models/questionnaire.model';
import { QuestionnairOperation } from './models/questionnaire.model';
import { QuestionnaireConfig } from './models/questionnaire.model';
import { offerrings, QuestionnaireDefinition } from './models/questionnaires.data';
import { MatRadioChange } from '@angular/material/radio';

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
    availables: QuestionnaireDefinition[] = [];
    qxName: string = 'truck questionnaire';

    constructor(private qxService: QuestionnaireService) {
        this.operation = qxService.createIdlingOperation();
    }

    ngOnInit() {
        this.qx = this.load(this.config);
        this.availables = offerrings;
    }

    payload: any;
    displayPayload() {
        this.payload = this.qxService.getPaperWork(this.qx);
    }

    collect() {
        this.operation = this.qxService.createChangeToNextGroupOperation();
    }

    takeQuestionnaire($event: MatRadioChange) {
        console.log('you want to take this questionnaire: ', $event.value);
        this.reload();
    }

    reload = () => (this.qx = this.load(this.config));

    load = (config: QuestionnaireConfig): Questionnair => this.qxService.getQuestionnaire(this.qxName, config);
}
