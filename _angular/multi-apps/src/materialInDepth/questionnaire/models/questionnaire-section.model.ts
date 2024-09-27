import { ChildQuestionTriggeredFunc, Question, QuestionDefinition } from './question.model';

export type SectionRulesFunc = (section: QuestionnaireSection) => void;

export class QuestionnaireSection {
    displayOrder: number;
    label: string;
    name: string;
    questions: Question[];
    manageSiblingQuestionInteractions: SectionRulesFunc = (s: QuestionnaireSection) => {};

    constructor(displayOrder: number, name: string, label: string) {
        this.displayOrder = displayOrder;
        this.label = label;
        this.name = name;
        this.questions = [];
    }

    setRulesFunc = (rulesFunc: SectionRulesFunc) => (this.manageSiblingQuestionInteractions = rulesFunc);

    getQuestionById = (id: string): Question | undefined => this.questions.find((q) => q.id === id);
}

export interface SectionDefinition {
    label: string;
    displayOrder: number;
    questions: QuestionDefinition[];
    name: string;
    rules: SectionRulesFunc | null;
}

export abstract class ChildQuestionTriggeredFuncs {
    static readonly none = null;
    static readonly hasAffirmativeAnswer: ChildQuestionTriggeredFunc = (q: Question) => q.answer.hasAffirmativeValue();
    static readonly hasNegativeAnswer: ChildQuestionTriggeredFunc = (q: Question) => !q.answer.hasAffirmativeValue();
    static readonly always: ChildQuestionTriggeredFunc = (q: Question) => true;
    static readonly never: ChildQuestionTriggeredFunc = (q: Question) => false;
}
