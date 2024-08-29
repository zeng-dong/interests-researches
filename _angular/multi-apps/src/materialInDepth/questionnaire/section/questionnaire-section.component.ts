import { Component, Input, OnInit } from '@angular/core';
import {
    QuestionnaireSection,
    QuestionnairOperation,
} from '../models/questionnaire.model';
import { QuestionnaireService } from '../models/questionnaire.service';

@Component({
    selector: 'qx-questionnaire-section',
    templateUrl: './questionnaire-section.component.html',
    styleUrls: ['./questionnaire-section.component.scss'],
})
export class QuestionnaireSectionComponent implements OnInit {
    @Input() section!: QuestionnaireSection;
    noToAll: boolean | undefined;
    operation: QuestionnairOperation;

    constructor(private qxService: QuestionnaireService) {
        this.operation = qxService.createIdlingOperation();
    }

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

    collect() {
        this.operation = this.qxService.createChangeToNextGroupOperation();
    }
}
