import { Answer, AnswerDataType } from './answer.model';

export type ChildQuestionTriggeredFunc = (question: Question) => boolean;

export class Question {
    id: string | undefined;
    label: string | undefined;
    text: string | undefined;
    children: Question[];
    type: QuestionType;
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
        if (this.id) {
            Reflect.set(report, this.id, this.answer.value);
        }
        //// set children
        this.children.forEach((c) => c.reportAnswer(report));
    }

    hasChildQuestions = () => this.children != undefined && this.children.length > 0;

    hasAnswer = (): boolean => this.answer.hasValue(); //// and child questions

    ////isChildQuestionsTriggered = (): boolean => this.hasChildQuestions() && this.answer.hasAffirmativeValue();
}

export interface QuestionDefinition {
    id: string | undefined;
    label: string | undefined;
    text: string;
    type: QuestionType;
    children: QuestionDefinition[];
    answerDataType: AnswerDataType;
    childTrigger: ChildQuestionTriggeredFunc | null;
}

export enum QuestionType {
    single,
    composite,
    group,
    //// question/single (with id), group (of questions, each with an id) , composite (one question with id, however without direct answer, with a group of questions , each with an id)
}

export interface QuestionnaireConfig {
    isCanngen: boolean;
    isMissourri: boolean;
    isEvenMoreSpecial: boolean;
}

export enum ParentChildRelationship {
    yesNoWithExplain,
    yesNoWithYesNo,
    yesNoWithEntity,
    yesNoWithGroup,
    groupWithExplain,
    other, // ???
}

export abstract class QuestionConstants {
    static readonly emptyId = '-999';
}
