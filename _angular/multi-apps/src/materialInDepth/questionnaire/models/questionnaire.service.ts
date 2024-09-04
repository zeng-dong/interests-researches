import { Injectable } from '@angular/core';
import { QuestionType, Question, QuestionnaireConfig } from './question.model';
import { Questionnair } from './questionnaire.model';
import { QuestionnairOperationType } from './questionnaire.model';
import { QuestionnairOperation } from './questionnaire.model';
import { QuestionnaireSection } from './questionnaire.model';
import { Answer, AnswerConstants } from './answer.model';
import { AnswerDataType } from './answer.model';
import { AnswerConfiguration } from './answer.model';

@Injectable({
    providedIn: 'root',
})
export class QuestionnaireService {
    constructor() {}

    getQuestionnaire(config: QuestionnaireConfig): Questionnair {
        const qx = this.createDefaultQuestionnaire('Programmable');
        if (config.isCanngen) {
            qx.add(supplemental);
        }

        this.manageQuestionapplicability(qx.sections, config, notApplicables);
        return qx;
    }

    createDefaultQuestionnaire(name: string): Questionnair {
        const qx = new Questionnair(name);
        qx.add(acord130);
        qx.add(acord125);
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

function createStandardQuestion(
    id: string,
    number: string,
    text: string,
    childId: string,
    childText: string
) {
    return new Question(
        id,
        number,
        text,
        [createStandardExplainationQuestion(childId, childText)],
        QuestionType.single,
        createStandardYesNoAnswer()
    );
}

function createStandardExplainationQuestion(
    id: string,
    text: string
): Question {
    return new Question(
        id,
        undefined,
        text,
        [],
        QuestionType.single,
        createStandardExplanationAnswer()
    );
}

function createStandardYesNoAnswer(): Answer {
    const yesNo = new AnswerConfiguration(
        AnswerDataType.exclusiveChoices,
        AnswerConstants.required
    );
    const answer = new Answer(yesNo);
    return answer;
}

function createStandardExplanationAnswer(): Answer {
    const explain = new AnswerConfiguration(
        AnswerDataType.longText,
        AnswerConstants.required,
        AnswerConstants.longTextMaxLength
    );
    const answer = new Answer(explain);
    return answer;
}

function createQuestionnaireSectionOne(): QuestionnaireSection {
    const section: QuestionnaireSection = {
        displayOrder: 0,
        name: 'General Questions',
        questions: [],
    };

    const q1 = createStandardQuestion(
        'quss1',
        '1',
        'Is your company in Texas?',
        'qus1_explain',
        'Please explain'
    );
    q1.trigger = (q) => q.answer.hasAffirmativeValue();
    section.questions.push(q1);

    const q2 = createStandardQuestion(
        'quss2',
        '2',
        'Is your company in Texas and doing well?',
        'qus2_explain',
        'Please explain'
    );
    section.questions.push(q2);

    return section;
}

const acord130 = createQuestionnaireSectionOne();

const acord125: QuestionnaireSection = {
    displayOrder: 1,
    name: 'Special Questions',
    questions: [],
};

const supplemental: QuestionnaireSection = {
    displayOrder: 2,
    name: 'Supplemental Questions',
    questions: [],
};

export const notApplicables: any = {
    idsOfQuestionsNotApplicableForCanngen: ['quss2', 'qus24'],
    idsOfQuestionsNotApplicableForMissourri: ['qus17'],
};
