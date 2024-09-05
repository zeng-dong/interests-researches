import { Answer } from './answer.model';

export type ChildQuestionTriggeredFunc = (question: Question) => boolean;

export class Question {
    id: string | undefined;
    number: string | undefined;
    text: string | undefined;
    children: Question[];
    type: QuestionType;
    answer: Answer;
    sharedIds: string[] = []; /// or akas. some question answer pair in api contract are duplicated with different keys
    applicable = true;

    /// "no to all" can be recorded in the api contract as a key value.

    trigger: ChildQuestionTriggeredFunc = (q: Question) => false; // default func returns false

    constructor(
        id: string | undefined,
        number: string | undefined,
        text: string,
        questions: Question[],
        type: QuestionType,
        answer: Answer
    ) {
        this.id = id;
        this.number = number;
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
    }

    hasChildQuestions = () =>
        this.children != undefined && this.children.length > 0;

    hasAnswer = (): boolean => this.answer.hasValue(); //// and child questions

    ////isChildQuestionsTriggered = (): boolean => this.hasChildQuestions() && this.answer.hasAffirmativeValue();
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

export interface QuestionDefinition {
    id: string | undefined;
    label: string | undefined;
    text: string;
    relationship?: ParentChildRelationship;
    child?: QuestionDefinition;
}

export enum ParentChildRelationship {
    yesNoWithExplain,
    yesNoWithYesNo,
    yesNoWithEntity,
    yesNoWithGroup,
    groupWithExplain,
    other, // ???
}
