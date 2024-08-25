import { Injectable } from '@angular/core';
import {
    Question,
    QuestionGroup,
    Questionnair,
    QuestionnairOperation,
    QuestionnairOperationType,
} from './question';
import { Answer } from './answer';
import { AnswerDataType } from './answer';
import { AnswerConfiguration } from './answer';

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

const acord130: QuestionGroup = {
    displayOrder: 0,
    name: 'General Questions',
    questions: [
        new Question(
            'qus1',
            1,
            'Is your company in Texas',
            new Answer(new AnswerConfiguration(AnswerDataType.boolean))
        ),
        new Question(
            'qus2',
            2,
            'Is your company doing well',
            new Answer(new AnswerConfiguration(AnswerDataType.boolean))
        ),
        new Question(
            'qus3',
            3,
            'Please write down your explanation',
            new Answer(new AnswerConfiguration(AnswerDataType.longText))
        ),
        new Question(
            'qus4',
            4,
            'Give us a short value',
            new Answer(new AnswerConfiguration(AnswerDataType.shortText))
        ),
    ],
};

const acord125: QuestionGroup = {
    displayOrder: 1,
    name: 'Special Questions',
    questions: [
        new Question(
            'qus21',
            1,
            'Is your company doing nice business',
            new Answer(new AnswerConfiguration(AnswerDataType.boolean))
        ),
        new Question(
            'qus22',
            2,
            'Is your company making bad money',
            new Answer(new AnswerConfiguration(AnswerDataType.boolean))
        ),
        new Question(
            'qus23',
            3,
            'Pick all the possible types of customers',
            new Answer(new AnswerConfiguration(AnswerDataType.multipleText))
        ),
    ],
};

const supplemental: QuestionGroup = {
    displayOrder: 2,
    name: 'Supplemental Questions',
    questions: [
        new Question(
            'qus31',
            1,
            'Are all your trucks in red color',
            new Answer(new AnswerConfiguration(AnswerDataType.boolean))
        ),
        new Question(
            'qus32',
            2,
            'Are all your trucks faster',
            new Answer(new AnswerConfiguration(AnswerDataType.boolean))
        ),
    ],
};
