import {
    Answer,
    AnswerConfiguration,
    AnswerDataType,
    AnswerConstants,
} from './answer.model';
import {
    ParentChildRelationship,
    Question,
    QuestionDefinition,
    QuestionType,
} from './question.model';

export function createQuestion(def: QuestionDefinition): Question | undefined {
    if (ParentChildRelationship.yesNoWithExplain === def.relationship)
        return createStandardQuestion(
            def.id!,
            def.label!,
            def.text,
            def.child?.id!,
            def.child?.text!
        );

    return undefined;
}

export function createStandardQuestion(
    id: string,
    number: string,
    text: string,
    childId: string,
    childText: string
) {
    return new Question(
        id,
        number,
        text,
        [createStandardExplainationQuestion(childId, childText)],
        QuestionType.single,
        createStandardYesNoAnswer()
    );
}

function createStandardExplainationQuestion(
    id: string,
    text: string
): Question {
    return new Question(
        id,
        undefined,
        text,
        [],
        QuestionType.single,
        createStandardExplanationAnswer()
    );
}

function createStandardYesNoAnswer(): Answer {
    const yesNo = new AnswerConfiguration(
        AnswerDataType.exclusiveChoices,
        AnswerConstants.required
    );
    const answer = new Answer(yesNo);
    return answer;
}

function createStandardExplanationAnswer(): Answer {
    const explain = new AnswerConfiguration(
        AnswerDataType.longText,
        AnswerConstants.required,
        AnswerConstants.longTextMaxLength
    );
    const answer = new Answer(explain);
    return answer;
}
