import {
    AfterViewInit,
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
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
    selector: 'qx-questionnaire-section',
    templateUrl: './questionnaire-section.component.html',
    styleUrls: ['./questionnaire-section.component.scss'],
})
export class QuestionnaireSectionComponent implements OnInit, AfterViewInit {
    @Input() section!: QuestionnaireSection;
    noToAll: boolean | undefined;
    @Input() operation!: QuestionnairOperation;

    @ViewChild('myform') myform: NgForm | undefined;

    constructor() {}
    ngAfterViewInit(): void {
        console.log('myform is after view init: ', this.myform);
    }

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

                if (change.currentValue.isChangeToNextGroup()) {
                    //this.collectAnswer = true;
                }
            }
        }
    }

    collect() {
        console.log('myform is in collect: ', this.myform);
    }
}
