import { Injectable } from '@angular/core';
import { QuestionGroup, Questionnair } from './question';

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
    questions: [],
};

const acord125: QuestionGroup = {
    displayOrder: 1,
    name: 'Special Questions',
    questions: [],
};

const supplemental: QuestionGroup = {
    displayOrder: 2,
    name: 'Supplemental Questions',
    questions: [],
};
