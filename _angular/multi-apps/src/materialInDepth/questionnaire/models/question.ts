import { Answer } from './answer';

export class Question {
    id: string;
    displayOrder: number;
    text: string;
    answer: Answer;
    child: Question | undefined;

    constructor(
        id: string,
        displayOrder: number,
        text: string,
        answer: Answer,
        child?: Question
    ) {
        this.id = id;
        this.displayOrder = displayOrder;
        this.text = text;
        this.answer = answer;
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

export class QuestionnairOperation {
    type: QuestionnairOperationType;

    constructor(type: QuestionnairOperationType) {
        this.type = type;
    }

    isChangeToNextGroup = (): boolean =>
        this.type === QuestionnairOperationType.changeToNextGroup;
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

export enum QuestionnairOperationType {
    none,
    changeToNextGroup,
    changeToPreviousGroup,
}
