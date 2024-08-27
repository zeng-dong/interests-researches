import { Answer } from './answer.model';

export class Question {
    id: string;
    displayOrder: number;
    text: string;
    answer: Answer;
    child: Question | CompositeQuestion | undefined;

    constructor(
        id: string,
        displayOrder: number,
        text: string,
        answer: Answer,
        child?: Question | CompositeQuestion
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

    hasAnswer = (): boolean => this.answer.hasValue();
    isCompositeQuestion = (): boolean => false;
    isSimpleQuestion = (): boolean => true;
}

export class CompositeQuestion {
    id: string;
    text: string;
    questions: Question[];

    constructor(id: string, text: string, questions: Question[]) {
        this.id = id;
        this.text = text;
        this.questions = questions;
    }

    reportAnswer(report: any) {
        const value = {};

        this.questions.forEach((q) => {
            q.reportAnswer(value);
        });
        Reflect.set(report, this.id, value);
    }

    hasAnswer = (): boolean => this.questions.every((q) => q.hasAnswer());
    isCompositeQuestion = (): boolean => true;
    isSimpleQuestion = (): boolean => false;
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

    ////allQuestionsAnswered = (): boolean => this.questions.every(x => x.hasAnswer());
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
