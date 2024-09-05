import {
    ParentChildRelationship,
    Question,
    QuestionDefinition,
} from './question.model';

export class QuestionnaireSection {
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
    sections: QuestionnaireSection[];
    name: string;

    constructor(name: string) {
        this.name = name;
        this.sections = [];
    }

    add(section: QuestionnaireSection): void {
        this.sections.push(section);
    }
}

export interface SectionDefinition {
    label: string;
    displayOrder: number;
    questions: QuestionDefinition[];
}

//// definition of sections
export const sections: SectionDefinition[] = [
    {
        label: 'Questions 1-8',
        displayOrder: 0,
        questions: [
            {
                id: 'cCompany',
                label: '1',
                text: 'Is your company doing well',
                relationship: ParentChildRelationship.yesNoWithExplain,
                child: {
                    id: 'cCompany_Explain',
                    label: undefined,
                    text: 'Please explain',
                },
            },
            {
                id: 'cQuestionnaire1',
                label: '2',
                text: 'Is your company doing well and even better',
                relationship: ParentChildRelationship.yesNoWithExplain,
                child: {
                    id: 'cQuestionnaire1_Explain',
                    label: undefined,
                    text: 'Please explain',
                },
            },
        ],
    },

    {
        label: 'Questions 9-17',
        displayOrder: 1,
        questions: [],
    },

    {
        label: 'Questions 18-28',
        displayOrder: 2,
        questions: [],
    },

    {
        label: 'Questions Supplemental 140-288',
        displayOrder: 2,
        questions: [],
    },
];
