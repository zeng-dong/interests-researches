import { Injectable } from '@angular/core';
import {
    Answer,
    AnswerDataType,
    QuestionGroup,
    Questionnair,
} from './question';

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
}

const acord130: QuestionGroup = {
    displayOrder: 0,
    name: 'General Questions',
    questions: [
        {
            id: 'qus1',
            displayOrder: 1,
            name: 'qus1',
            text: 'Is your company in Texas',
            answer: new Answer(AnswerDataType.boolean),
            child: undefined,
        },
        {
            id: 'qus2',
            displayOrder: 2,
            name: 'qus2',
            text: 'Is your company doing well',
            answer: new Answer(AnswerDataType.boolean),
            child: undefined,
        },
        {
            id: 'qus3',
            displayOrder: 3,
            name: 'qus3',
            text: 'Please write down your explanation',
            answer: new Answer(AnswerDataType.longText),
            child: undefined,
        },
        {
            id: 'qus4',
            displayOrder: 4,
            name: 'qus4',
            text: 'Give us a short value',
            answer: new Answer(AnswerDataType.shortText),
            child: undefined,
        },
    ],
};

const acord125: QuestionGroup = {
    displayOrder: 1,
    name: 'Special Questions',
    questions: [
        {
            id: 'qus21',
            displayOrder: 1,
            name: 'qus21',
            text: 'Is your company doing nice business',
            answer: new Answer(AnswerDataType.boolean),
            child: undefined,
        },
        {
            id: 'qus22',
            displayOrder: 2,
            name: 'qus22',
            text: 'Is your company making bad money',
            answer: new Answer(AnswerDataType.boolean),
            child: undefined,
        },
        {
            id: 'qus23',
            displayOrder: 3,
            name: 'qus23',
            text: 'Pick all the possible types of customers',
            answer: new Answer(AnswerDataType.multipleText),
            child: undefined,
        },
    ],
};

const supplemental: QuestionGroup = {
    displayOrder: 2,
    name: 'Supplemental Questions',
    questions: [
        {
            id: 'qus31',
            displayOrder: 1,
            name: 'qus31',
            text: 'Are all your trucks in red color',
            answer: new Answer(AnswerDataType.boolean),
            child: undefined,
        },
        {
            id: 'qus32',
            displayOrder: 2,
            name: 'qus32',
            text: 'Are all your trucks faster',
            answer: new Answer(AnswerDataType.boolean),
            child: undefined,
        },
    ],
};
