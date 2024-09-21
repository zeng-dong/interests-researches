import { Answer, AnswerConfiguration, AnswerDataType, AnswerConstants } from './answer.model';
import { ChildQuestionTriggeredFunc, Question, QuestionDefinition, QuestionType } from './question.model';

export function createQuestion(def: QuestionDefinition): Question | undefined {
    if (AnswerDataType.exclusiveChoices === def.answerDataType && AnswerDataType.longText === def.child?.answerDataType)
        return createYesNoParentExplanationChildQuestion(def.id!, def.label!, def.text, def.child?.id!, def.child?.text!, def.childTrigger);

    /// next: yes no with composite
    /// createYesNoParentCompositeChildQuestion

    // if (AnswerDataType.exclusiveChoices === def.answerDataType && AnswerDataType.shortText === def.child?.answerDataType)
    //     return createStandardQuestion(def.id!, def.label!, def.text, def.child?.id!, def.child?.text!, def.childTrigger);
    //  how to create the question?

    ///

    return undefined;
}

function createYesNoParentExplanationChildQuestion(id: string, label: string, text: string, childId: string, childText: string, childTrigger: ChildQuestionTriggeredFunc | null) {
    const q = new Question(id, label, text, [createExplanationQuestion(childId, childText)], QuestionType.single, createYesNoAnswer());
    if (childTrigger) q.trigger = childTrigger;
    return q;
}

function createExplanationQuestion(id: string, text: string): Question {
    return new Question(id, undefined, text, [], QuestionType.single, createExplanationAnswer());
}

function createYesNoAnswer(): Answer {
    return new Answer(new AnswerConfiguration(AnswerDataType.exclusiveChoices, AnswerConstants.required));
}

function createExplanationAnswer(): Answer {
    return new Answer(new AnswerConfiguration(AnswerDataType.longText, AnswerConstants.required, AnswerConstants.longTextMaxLength));
}
