import {
    ParentChildRelationship,
    Question,
    QuestionDefinition,
} from './question.model';

export type SectionRulesFunc = (section: QuestionnaireSection) => void;

export class QuestionnaireSection {
    displayOrder: number;
    name: string;
    questions: Question[];
    rulesFunc: SectionRulesFunc = () => {};

    constructor(displayOrder: number, name: string) {
        this.displayOrder = displayOrder;
        this.name = name;
        this.questions = [];
    }

    setRulesFunc = (rulesFunc: SectionRulesFunc) =>
        (this.rulesFunc = rulesFunc);
    getQuestionById(id: string): Question | undefined {
        return this.questions.find((q) => q.id === id);
    }

    makeQuestionUnapplicableByQuestionPositiveAnswer(
        sourceId: string,
        targetId: string
    ) {
        const source = this.getQuestionById(sourceId);
        if (!source || !source.answer.hasAffirmativeValue()) return;
        const target = this.getQuestionById(targetId);
        if (!target) return;
        target.applicable = false;
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
