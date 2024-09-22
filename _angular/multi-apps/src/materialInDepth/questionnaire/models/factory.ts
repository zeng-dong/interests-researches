import { Answer, AnswerConfiguration, AnswerDataType, AnswerConstants } from './answer.model';
import { ChildQuestionTriggeredFunc, Question, QuestionDefinition, QuestionType } from './question.model';

export function createQuestion(def: QuestionDefinition): Question | undefined {
    return createQuestionImpl(def);

    // if (AnswerDataType.exclusiveChoices === def.answerDataType && def.children.length === 1 && AnswerDataType.longText === def.children[0].answerDataType)
    //     return createYesNoParentExplanationChildQuestion(def.id!, def.label!, def.text, def.children[0].id!, def.children[0].text!, def.childTrigger);

    // //// next: group with multiple checkboxes, one can triger its child which is explanation
    // if (QuestionType.group === def.type) {
    //     return createGroupedMultipleChoicesQuestion(def.id!, def.label!, def.text, def.children);
    // }
    // /// next: yes no with composite
    // /// createYesNoParentCompositeChildQuestion

    // // if (AnswerDataType.exclusiveChoices === def.answerDataType && AnswerDataType.shortText === def.child?.answerDataType)
    // //     return createStandardQuestion(def.id!, def.label!, def.text, def.child?.id!, def.child?.text!, def.childTrigger);
    // //  how to create the question?

    // ///

    // return undefined;
}

export function createQuestionImpl(def: QuestionDefinition): Question | undefined {
    const q = new Question(def.id, def.label, def.text, [], def.type, createAnswer(createAnswerConfiguration(def.answerDataType)));
    if (def.childTrigger) q.trigger = def.childTrigger;
    def.children.forEach((childDef) => {
        const child = createQuestion(childDef);
        if (child) q.children.push(child);
    });

    return q;
}

//// standard yes/no triggers explanation
function createYesNoParentExplanationChildQuestion(id: string, label: string, text: string, childId: string, childText: string, childTrigger: ChildQuestionTriggeredFunc | null) {
    const q = new Question(id, label, text, [createExplanationQuestion(childId, childText)], QuestionType.single, createYesNoAnswer());
    if (childTrigger) q.trigger = childTrigger;
    return q;
}

//// virtual question (no answer for itself but host a group of checkable choices)
function createGroupedMultipleChoicesQuestion(id: string, label: string, text: string, childDefs: QuestionDefinition[]) {
    const q = new Question(id, label, text, [], QuestionType.group, createEmptyAnswer());
    /// for each child def add a child question
    childDefs.forEach((def) => {});

    return q;
}

function createExplanationQuestion(id: string, text: string): Question {
    return new Question(id, undefined, text, [], QuestionType.single, createExplanationAnswer());
}

function createYesNoAnswer(): Answer {
    return new Answer(new AnswerConfiguration(AnswerDataType.exclusiveChoices, AnswerConstants.required));
}

function createEmptyAnswer(): Answer {
    return new Answer(new AnswerConfiguration(AnswerDataType.none, !AnswerConstants.required));
}

function createAnswer(config: AnswerConfiguration): Answer {
    return new Answer(config);
}

function createAnswerConfiguration(type: AnswerDataType, required: boolean = true): AnswerConfiguration {
    return new AnswerConfiguration(type, required);
}

function createExplanationAnswer(): Answer {
    return new Answer(new AnswerConfiguration(AnswerDataType.longText, AnswerConstants.required, AnswerConstants.longTextMaxLength));
}
