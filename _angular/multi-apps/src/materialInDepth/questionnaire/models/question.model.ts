import { Answer } from './answer.model';

export class Question {
    id: string;
    displayOrder: number;
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
        this.displayOrder = displayOrder;
        this.text = text;
        this.answer = answer;
        this.secondary = secondary;
    }

    reportAnswer(report: any) {
        Reflect.set(report, this.id, this.answer?.value);
    }

    hasSecondaryQuestion = () => this.secondary != undefined;

    hasAnswer = (): boolean => this.answer.hasValue();
}

export class SecondaryQuestion {
    id: string | undefined;
    text: string;
    questions: Question[];
    type: SecondaryQuestionType;

    constructor(
        id: string | undefined,
        text: string,
        questions: Question[],
        type: SecondaryQuestionType
    ) {
        this.id = id;
        this.text = text;
        this.questions = questions;
        this.type = type;
    }
}

export enum SecondaryQuestionType {
    simple,
    composite,
}
