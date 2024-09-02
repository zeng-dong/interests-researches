import { Injectable } from '@angular/core';
import {
    Question,
    SecondaryQuestion,
    QuestionType,
    UniversalQuestion,
} from './question.model';
import { Questionnair } from './questionnaire.model';
import { QuestionnairOperationType } from './questionnaire.model';
import { QuestionnairOperation } from './questionnaire.model';
import { QuestionnaireSection } from './questionnaire.model';
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

function createQuestionnaireSectionOne(): QuestionnaireSection {
    const section: QuestionnaireSection = {
        displayOrder: 0,
        name: 'General Questions',
        questions: [],
    };

    let questionDisplayOrder = 1;
    section.questions.push(
        createStandardTopLevelQuestion(
            'quss1',
            'Iss your company in Texas?',
            questionDisplayOrder++,
            'qus1_explain',
            'Please explain'
        )
    );

    section.questions.push(
        createStandardTopLevelQuestion(
            'quss2',
            'Iss your company in Texas and doing well?',
            questionDisplayOrder++,
            'qus2_explain',
            'Please explain'
        )
    );

    return section;
}

const acord130 = createQuestionnaireSectionOne();

// const acord130: QuestionnaireSection = {
//     displayOrder: 0,
//     name: 'General Questions',
//     questions: [
//         createStandardTopLevelQuestion(
//             'quss1',
//             'Iss your company in Texas?',
//             questionDisplayOrder,
//             'qus1_explain',
//             'Please explain'
//         ),

//         new Question(
//             'qus1',
//             questionDisplayOrder++,
//             'Is your company in Texas',
//             new Answer(new AnswerConfiguration(AnswerDataType.boolean, true)),
//             createStandardExplain('qus1_explain', 'Please explain')
//         ),
//         // new Question(
//         //     'qus2',
//         //     2,
//         //     'Is your company doing well',
//         //     new Answer(new AnswerConfiguration(AnswerDataType.boolean, false))
//         // ),
//         // new Question(
//         //     'qus3',
//         //     3,
//         //     'Please write down your explanation',
//         //     new Answer(new AnswerConfiguration(AnswerDataType.longText, false))
//         // ),
//         // new Question(
//         //     'qus4',
//         //     4,
//         //     'Give us a short value',
//         //     new Answer(new AnswerConfiguration(AnswerDataType.shortText, true))
//         // ),
//     ],
// };

const acord125: QuestionnaireSection = {
    displayOrder: 1,
    name: 'Special Questions',
    questions: [
        // new Question(
        //     'qus21',
        //     1,
        //     'Is your company doing nice business',
        //     new Answer(new AnswerConfiguration(AnswerDataType.boolean, true))
        // ),
        // new Question(
        //     'qus22',
        //     2,
        //     'Is your company making bad money',
        //     new Answer(new AnswerConfiguration(AnswerDataType.boolean, true))
        // ),
        // new Question(
        //     'qus23',
        //     3,
        //     'Pick all the possible types of customers',
        //     new Answer(
        //         new AnswerConfiguration(AnswerDataType.multipleText, true)
        //     )
        // ),
    ],
};

const supplemental: QuestionnaireSection = {
    displayOrder: 2,
    name: 'Supplemental Questions',
    questions: [
        // new Question(
        //     'qus31',
        //     1,
        //     'Are all your trucks in red color',
        //     new Answer(new AnswerConfiguration(AnswerDataType.boolean, true))
        // ),
        // new Question(
        //     'qus32',
        //     2,
        //     'Are all your trucks faster',
        //     new Answer(new AnswerConfiguration(AnswerDataType.boolean, true))
        // ),
    ],
};

const q1: UniversalQuestion = new UniversalQuestion(
    'cComapnay',
    '1',
    'How are you doing?',
    [
        new UniversalQuestion(
            'cCompany_Explain',
            undefined,
            'Please explain',
            [],
            QuestionType.single,
            new Answer(
                new AnswerConfiguration(AnswerDataType.shortText, true, 500)
            ),
            false
        ),
    ],
    QuestionType.single,
    new Answer(new AnswerConfiguration(AnswerDataType.boolean, true)),
    true
);

//// createStandardYesNoAnswer (yesNo, requried)
////

function createStandardTopLevelQuestion(
    id: string,
    text: string,
    displayOrder: number,
    secondaryId?: string,
    secondaryText?: string
): Question {
    const q = new Question(
        id,
        displayOrder++,
        text,
        new Answer(new AnswerConfiguration(AnswerDataType.boolean, true)),
        undefined
    );

    if (secondaryId && secondaryText) {
        q.secondary = createStandardExplain(secondaryId, secondaryText);
    }

    return q;
}

function createStandardExplain(id: string, text: string): SecondaryQuestion {
    return new SecondaryQuestion(
        id,
        text,
        [
            new Question(
                id,
                1,
                text,
                new Answer(
                    new AnswerConfiguration(AnswerDataType.longText, true, 500)
                ),
                undefined
            ),
        ],
        QuestionType.single
    );
}
