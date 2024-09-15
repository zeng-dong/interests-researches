import { Injectable } from '@angular/core';
import { QuestionnaireConfig } from './question.model';
import {
    Questionnair,
    SectionDefinition,
    sections,
} from './questionnaire.model';
import { QuestionnairOperationType } from './questionnaire.model';
import { QuestionnairOperation } from './questionnaire.model';
import { QuestionnaireSection } from './questionnaire.model';
import { createQuestion, createStandardQuestion } from './factory';

@Injectable({
    providedIn: 'root',
})
export class QuestionnaireService {
    constructor() {}

    getQuestionnaire(name: string, config: QuestionnaireConfig): Questionnair {
        const qx = this.createDefaultQuestionnaire(name, config);

        this.manageQuestionapplicability(qx.sections, config, notApplicables);
        return qx;
    }

    getQuestionnaireSection(
        definition: SectionDefinition
    ): QuestionnaireSection {
        const section = new QuestionnaireSection(
            definition.displayOrder,
            definition.label,
            definition.label
        );

        definition.questions.forEach((q) => {
            const question = createQuestion(q);
            if (question) section.questions.push(question);
        });

        return section;
    }

    // getQuestionnaire_Old(config: QuestionnaireConfig): Questionnair {
    //     const qx = this.createDefaultQuestionnaire('Programmable');
    //     if (config.isCanngen) {
    //         qx.add(supplemental);
    //     }

    //     this.manageQuestionapplicability(qx.sections, config, notApplicables);
    //     return qx;
    // }

    createDefaultQuestionnaire(
        name: string,
        config: QuestionnaireConfig
    ): Questionnair {
        const qx = new Questionnair(name);
        sections.forEach((s) => {
            if (s.name === 'Supplemental' && config.isCanngen) {
                qx.add(this.getQuestionnaireSection(s));
            } else {
                qx.add(this.getQuestionnaireSection(s));
            }
        });
        return qx;
    }

    manageQuestionapplicability(
        sections: QuestionnaireSection[],
        config: QuestionnaireConfig,
        notApplicables: any
    ): void {
        this.enableQuestions(sections);

        if (config.isCanngen)
            this.disableQuestions(
                sections,
                notApplicables.questionIdsNotApplicableForCanngen
            );

        if (config.isMissourri)
            this.disableQuestions(
                sections,
                notApplicables.questionIdsNotApplicableForMissourri
            );
    }

    enableQuestions(sections: QuestionnaireSection[]): void {
        sections.forEach((s) => {
            s.questions.forEach((q) => (q.applicable = true));
        });
    }

    disableQuestions(sections: QuestionnaireSection[], ids: string[]): void {
        sections.forEach((s) => {
            s.questions.forEach((q) => {
                if (ids.some((x) => x === q.id)) q.applicable = false;
            });
        });
    }

    getPaperWork(qx: Questionnair) {
        const flattened: any = {};

        qx.sections.forEach((g) => {
            g.questions.forEach((q) => q.reportAnswer(flattened));
        });

        return flattened;
    }

    createChangeToNextGroupOperation = (): QuestionnairOperation =>
        new QuestionnairOperation(QuestionnairOperationType.changeToNextGroup);

    createIdlingOperation = (): QuestionnairOperation =>
        new QuestionnairOperation(QuestionnairOperationType.none);
}

// function createQuestionnaireSectionOne(): QuestionnaireSection {
//     const section: QuestionnaireSection = new QuestionnaireSection(
//         0,
//         'General Questions'
//     );

//     const q1 = createStandardQuestion(
//         'quss1',
//         '1',
//         'Is your company in Texas?',
//         'qus1_explain',
//         'Please explain'
//     );
//     q1.trigger = (q) => q.answer.hasAffirmativeValue();
//     section.questions.push(q1);

//     const q2 = createStandardQuestion(
//         'quss2',
//         '2',
//         'Is your company in Texas and doing well?',
//         'qus2_explain',
//         'Please explain'
//     );
//     section.questions.push(q2);

//     return section;
// }

// const acord130 = createQuestionnaireSectionOne();

// const acord125: QuestionnaireSection = new QuestionnaireSection(
//     1,
//     'Special Questions'
// );

// const supplemental: QuestionnaireSection = new QuestionnaireSection(
//     2,
//     'Supplemental Questions'
// );

export const notApplicables: any = {
    idsOfQuestionsNotApplicableForCanngen: ['quss2', 'qus24'],
    idsOfQuestionsNotApplicableForMissourri: ['qus17'],
};
