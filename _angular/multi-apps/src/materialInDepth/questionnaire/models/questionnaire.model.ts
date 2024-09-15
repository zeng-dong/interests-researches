import { AnswerDataType } from './answer.model';
import { Question, QuestionDefinition } from './question.model';

export type SectionRulesFunc = (section: QuestionnaireSection) => void;

export class QuestionnaireSection {
    displayOrder: number;
    label: string;
    name: string;
    questions: Question[];
    manageSiblingQuestionInteractions: SectionRulesFunc = (
        s: QuestionnaireSection
    ) => {};

    constructor(displayOrder: number, name: string, label: string) {
        this.displayOrder = displayOrder;
        this.label = label;
        this.name = name;
        this.questions = [];
    }

    setRulesFunc = (rulesFunc: SectionRulesFunc) =>
        (this.manageSiblingQuestionInteractions = rulesFunc);

    getQuestionById(id: string): Question | undefined {
        return this.questions.find((q) => q.id === id);
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
    name: string;
    rules: SectionRulesFunc | null;
}

//// definition of sections
export const sections: SectionDefinition[] = [
    {
        label: 'Questions 1-8',
        displayOrder: 0,
        name: 'acord125',
        rules: (section: QuestionnaireSection) => {
            const source = section.getQuestionById('cCompany');
            const target = section.getQuestionById('cQuestionnaire1');
            if (source && target) {
                if (source.answer.hasAffirmativeValue()) {
                    target.applicable = false;
                    target.answer.value = '';
                } else {
                    target.applicable = true;
                }
            }
        },
        questions: [
            {
                id: 'cCompany',
                label: '1',
                text: 'Is your company doing well',
                answerDataType: AnswerDataType.exclusiveChoices,
                child: {
                    id: 'cCompany_Explain',
                    label: undefined,
                    text: 'Please explain',
                    answerDataType: AnswerDataType.longText,
                },
            },
            {
                id: 'cQuestionnaire1',
                label: '2',
                text: 'Is your company doing well and even better',
                answerDataType: AnswerDataType.exclusiveChoices,
                child: {
                    id: 'cQuestionnaire1_Explain',
                    label: undefined,
                    text: 'Please explain',
                    answerDataType: AnswerDataType.longText,
                },
            },
        ],
    },

    {
        label: 'Questions 9-17',
        displayOrder: 1,
        name: 'acord130 part 1',
        rules: null,
        questions: [],
    },

    {
        label: 'Questions 18-28',
        displayOrder: 2,
        name: 'acord130 part 2',
        rules: null,
        questions: [],
    },

    {
        label: 'Questions Supplemental 140-288',
        displayOrder: 2,
        name: 'supplemental',
        rules: null,
        questions: [],
    },
];
