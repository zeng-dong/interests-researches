export class Question {
    id: string;
    displayOrder: number;
    name: string;
    text: string;
    answer: Answer | undefined;
    child: Question | undefined;

    constructor(id: string, displayOrder: number, name: string, text: string) {
        this.id = id;
        this.displayOrder = displayOrder;
        this.name = name;
        this.text = text;
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
    result: string | boolean | undefined;
    type: AnswerDataType;
    maxLength: number;

    constructor(type: AnswerDataType, maxLength: number) {
        this.type = type;
        this.maxLength = maxLength;
        this.result = undefined;
    }
}

export enum AnswerDataType {
    boolean = '0',
    longText = '1',
    shortText = '2',
    multipleText = '3',

}
