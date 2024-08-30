import {
    Component,
    Input,
    OnInit,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import {
    QuestionnaireSection,
    QuestionnairOperation,
} from '../models/questionnaire.model';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'qx-questionnaire-section',
    templateUrl: './questionnaire-section.component.html',
    styleUrls: ['./questionnaire-section.component.scss'],
})
export class QuestionnaireSectionComponent implements OnInit {
    @Input() section!: QuestionnaireSection;
    noToAll: boolean | undefined;
    @Input() operation!: QuestionnairOperation;

    constructor() {}

    ngOnInit(): void {
        console.log(
            'in QuestionnaireSectionComponent received operation: ',
            this.operation
        );
    }

    ngOnChanges(changes: SimpleChanges) {
        for (const propName in changes) {
            if (propName === 'operation') {
                const change = changes[propName];

                console.log(
                    'operation changed, received by QuestionnaireSectionComponent: ',
                    this.operation
                );

                // if (change.currentValue.isChangeToNextGroup()) {
                //     this.collectAnswer = true;
                // }
            }
        }
    }

    collect() {}
}
