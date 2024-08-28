import { Injectable } from '@angular/core';
import {
    Question,
    QuestionnairePage,
    Questionnair,
    QuestionnairOperation,
    QuestionnairOperationType,
} from './question.model';
import { Answer } from './answer.model';
import { AnswerDataType } from './answer.model';
import { AnswerConfiguration } from './answer.model';

@Injectable({
    providedIn: 'root',
})
export class QuestionnaireService {
    constructor() {}

    getQuestionnaire(): Questionnair {
        const qx = new Questionnair('Programmable');
        qx.add(acord130);
        qx.add(acord125);
        qx.add(supplemental);

        return qx;
    }

    getPaperWork(qx: Questionnair) {
        const flattened: any = {};

        qx.groups.forEach((g) => {
            g.questions.forEach((q) => q.reportAnswer(flattened));
        });

        return flattened;
    }

    createChangeToNextGroupOperation = (): QuestionnairOperation =>
        new QuestionnairOperation(QuestionnairOperationType.changeToNextGroup);

    createIdlingOperation = (): QuestionnairOperation =>
        new QuestionnairOperation(QuestionnairOperationType.none);
}

const acord130: QuestionnairePage = {
    displayOrder: 0,
    name: 'General Questions',
    questions: [
        new Question(
            'qus1',
            1,
            'Is your company in Texas',
            new Answer(new AnswerConfiguration(AnswerDataType.boolean, true)),
            new Question(
                'qus1_explain',
                0,
                'Please explain',
                new Answer(
                    new AnswerConfiguration(AnswerDataType.longText, true)
                )
            )
        ),
        new Question(
            'qus2',
            2,
            'Is your company doing well',
            new Answer(new AnswerConfiguration(AnswerDataType.boolean, false))
        ),
        new Question(
            'qus3',
            3,
            'Please write down your explanation',
            new Answer(new AnswerConfiguration(AnswerDataType.longText, false))
        ),
        new Question(
            'qus4',
            4,
            'Give us a short value',
            new Answer(new AnswerConfiguration(AnswerDataType.shortText, true))
        ),
    ],
};

const acord125: QuestionnairePage = {
    displayOrder: 1,
    name: 'Special Questions',
    questions: [
        new Question(
            'qus21',
            1,
            'Is your company doing nice business',
            new Answer(new AnswerConfiguration(AnswerDataType.boolean, true))
        ),
        new Question(
            'qus22',
            2,
            'Is your company making bad money',
            new Answer(new AnswerConfiguration(AnswerDataType.boolean, true))
        ),
        new Question(
            'qus23',
            3,
            'Pick all the possible types of customers',
            new Answer(
                new AnswerConfiguration(AnswerDataType.multipleText, true)
            )
        ),
    ],
};

const supplemental: QuestionnairePage = {
    displayOrder: 2,
    name: 'Supplemental Questions',
    questions: [
        new Question(
            'qus31',
            1,
            'Are all your trucks in red color',
            new Answer(new AnswerConfiguration(AnswerDataType.boolean, true))
        ),
        new Question(
            'qus32',
            2,
            'Are all your trucks faster',
            new Answer(new AnswerConfiguration(AnswerDataType.boolean, true))
        ),
    ],
};
