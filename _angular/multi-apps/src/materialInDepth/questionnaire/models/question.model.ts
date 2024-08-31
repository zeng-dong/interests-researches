import { Answer } from './answer.model';

export class Question {
    id: string;
    number: number;
    text: string;
    answer: Answer;
    secondary: SecondaryQuestion | undefined;

    constructor(
        id: string,
        displayOrder: number,
        text: string,
        answer: Answer,
        secondary: SecondaryQuestion | undefined
    ) {
        this.id = id;
        this.number = displayOrder;
        this.text = text;
        this.answer = answer;
        this.secondary = secondary;
    }

    reportAnswer(report: any) {
        Reflect.set(report, this.id, this.answer?.value);
    }

    hasSecondaryQuestion = () => this.secondary != undefined;

    hasAnswer = (): boolean => this.answer.hasValue();

    isSecondaryTriggered = (): boolean =>
        this.hasSecondaryQuestion() && this.answer.hasAffirmativeValue();
}

export class SecondaryQuestion {
    id: string | undefined;
    text: string;
    questions: Question[];
    type: QuestionType;

    constructor(
        id: string | undefined,
        text: string,
        questions: Question[],
        type: QuestionType
    ) {
        this.id = id;
        this.text = text;
        this.questions = questions;
        this.type = type;
    }
}

export class UniversalQuestion {
    id: string | undefined;
    displayIndex: string | undefined;
    text: string | undefined;
    children: Question[];
    type: QuestionType;
    answer: Answer;
    isChildQuestionTrigger: boolean = false;

    constructor(
        id: string | undefined,
        displayIndex: string | undefined,
        text: string,
        questions: Question[],
        type: QuestionType,
        answer: Answer,
        isTrigger?: boolean
    ) {
        this.id = id;
        this.displayIndex = displayIndex;
        this.text = text;
        this.children = questions;
        this.type = type;
        this.answer = answer;
        if ( isTrigger ) this.isChildQuestionTrigger = true;
    }

    reportAnswer(report: any) {
        if (this.id) {
            Reflect.set(report, this.id, this.answer.value);
        }
        //// set children
    }

    hasChildQuestions = () =>
        this.children != undefined && this.children.length > 0;

    hasAnswer = (): boolean => this.answer.hasValue();

    isChildQuestionsTriggered = (): boolean =>
        this.hasChildQuestions() && this.answer.hasAffirmativeValue();
}

export enum QuestionType {
    simple,
    composite,
    single,
    group
}
