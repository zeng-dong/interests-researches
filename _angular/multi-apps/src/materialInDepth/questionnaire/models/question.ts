export class Question {
    id: string;
    displayOrder: number;
    text: string;
    answer: Answer | undefined;
    child: Question | undefined;

    constructor(
        id: string,
        displayOrder: number,
        text: string,
        answer?: Answer,
        child?: Question) {

        this.id = id;
        this.displayOrder = displayOrder;
        this.text = text;
        this.answer = answer ? answer : undefined;
        this.child = child ? child : undefined;
    }

    reportAnswer(report: any) {
        Reflect.set(report, this.id, this.answer?.value);
    }
}

export class QuestionGroup {
    displayOrder: number;
    name: string;
    questions: Question[];

    constructor(displayOrder: number, name: string) {
        this.displayOrder = displayOrder;
        this.name = name;
        this.questions = [];
    }
}

export class Questionnair {
    groups: QuestionGroup[];
    name: string;

    constructor(name: string) {
        this.name = name;
        this.groups = [];
    }

    add(group: QuestionGroup): void {
        this.groups.push(group);
    }
}

export class Answer {
    value: string | boolean | undefined;
    config: AnswerConfiguration;

    constructor(config: AnswerConfiguration) {
        this.config = config;
        this.value = undefined;
    }
}

export class AnswerConfiguration {
    type: AnswerDataType;
    maxLength: number | undefined;

    constructor(type: AnswerDataType, maxLength?: number) {
        this.type = type;
        this.maxLength = maxLength ? maxLength : undefined;
    }
}

export enum AnswerDataType {
    boolean,
    longText,
    shortText,
    multipleText,
}
