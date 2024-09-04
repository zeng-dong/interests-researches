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
import { NgForm } from '@angular/forms';

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
    ngAfterViewInit(): void {}

    ngOnInit(): void {}

    ngOnChanges(changes: SimpleChanges) {
        for (const propName in changes) {
            if (propName === 'operation') {
                const change = changes[propName];

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
