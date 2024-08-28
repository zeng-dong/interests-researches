import { Question } from './question.model';

export class QuestionnairePage {
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

export enum QuestionnairOperationType {
    none,
    changeToNextGroup,
    changeToPreviousGroup,
}

export class Questionnair {
    pages: QuestionnairePage[];
    name: string;

    constructor(name: string) {
        this.name = name;
        this.pages = [];
    }

    add(page: QuestionnairePage): void {
        this.pages.push(page);
    }
}
