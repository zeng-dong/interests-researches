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
import { withNoHttpTransferCache } from '@angular/platform-browser';

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
            definition.name,
            definition.label
        );

        definition.questions.forEach((q) => {
            const question = createQuestion(q);
            if (question) section.questions.push(question);
        });

        //// example to setup section level(inter sibling questions) rules
        if (section.name.toLowerCase() === 'acord125') {
            console.log('setting section rule to section: ', section.name);

            section.setRulesFunc((x: QuestionnaireSection) => {
                const source = x.getQuestionById('cCompany');
                const target = x.getQuestionById('cQuestionnaire1');

                if (source && target) {
                    target.applicable = source.answer.hasAffirmativeValue()
                        ? false
                        : true;
                }
            });
        }

        return section;
    }

    createDefaultQuestionnaire(
        name: string,
        config: QuestionnaireConfig
    ): Questionnair {
        const qx = new Questionnair(name);
        sections.forEach((s) => {
            if (s.name.toLowerCase() != 'supplemental') {
                qx.add(this.getQuestionnaireSection(s));
            } else {
                if (config.isCanngen) qx.add(this.getQuestionnaireSection(s));
            }
        });
        return qx;
    }

    manageQuestionapplicability(
        sections: QuestionnaireSection[],
        config: QuestionnaireConfig,
        notApplicables: any
    ): void {
        console.log(
            'manage non applicables with these id array: ',
            notApplicables
        );

        this.enableQuestions(sections);

        if (config.isCanngen)
            this.disableQuestions(
                sections,
                notApplicables.idsOfQuestionsNotApplicableForCanngen
            );

        if (config.isMissourri)
            this.disableQuestions(
                sections,
                notApplicables.idsOfQuestionsNotApplicableForMissourri
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

export const notApplicables: any = {
    idsOfQuestionsNotApplicableForCanngen: ['quss2', 'qus24'],
    idsOfQuestionsNotApplicableForMissourri: ['qus17'],
};
