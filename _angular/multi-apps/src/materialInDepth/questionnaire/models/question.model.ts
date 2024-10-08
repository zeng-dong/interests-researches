import { Answer, AnswerConfiguration, AnswerDataType } from './answer.model';

export type ChildQuestionTriggeredFunc = (question: Question) => boolean;

export class Question {
    id: string | undefined;
    label: string | undefined;
    text: string | undefined;
    type: QuestionType;
    children: Question[];
    answer: Answer;
    sharedIds: string[] = []; /// or akas. some question answer pair in api contract are duplicated with different keys
    applicable = true;
    trigger: ChildQuestionTriggeredFunc = (q: Question) => false; // default func returns false
    /// "no to all" can be recorded in the api contract as a key value.

    constructor(id: string | undefined, label: string | undefined, text: string, questions: Question[], type: QuestionType, answer: Answer) {
        this.id = id;
        this.label = label;
        this.text = text;
        this.children = questions;
        this.type = type;
        this.answer = answer;
    }

    reportAnswer(report: any) {
        if (this.id) Reflect.set(report, this.id, this.answer.value);
        this.children.forEach((c) => c.reportAnswer(report));
    }

    hasChildQuestions = () => this.children != undefined && this.children.length > 0;

    hasAnswer = (): boolean => {
        if (this.type === QuestionType.group) return this.children.some((c) => c.hasAnswer());
        return this.answer.hasValue();
    };
}

export interface QuestionDefinition {
    id: string | undefined;
    label: string | undefined;
    text: string;
    type: QuestionType;
    children: QuestionDefinition[];
    answerConfig: AnswerConfiguration;
    childTrigger: ChildQuestionTriggeredFunc | null;
}

export enum QuestionType {
    single,
    composite,
    group,
    //// question/single (with id), group (of questions, each with an id) , composite (one question with id, however without direct answer, with a group of questions , each with an id)
}

export abstract class QuestionConstants {
    static readonly emptyId = '-999';
}
