import {
    Answer,
    AnswerConfiguration,
    AnswerDataType,
    AnswerConstants,
} from './answer.model';
import {
    Question,
    QuestionDefinition,
    QuestionType,
} from './question.model';

export function createQuestion(def: QuestionDefinition): Question | undefined {
    if (
        AnswerDataType.exclusiveChoices === def.answerDataType &&
        AnswerDataType.longText === def.child?.answerDataType
    )
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
    label: string,
    text: string,
    childId: string,
    childText: string
) {
    return new Question(
        id,
        label,
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
    return new Answer(
        new AnswerConfiguration(
            AnswerDataType.longText,
            AnswerConstants.required,
            AnswerConstants.longTextMaxLength
        )
    );
}
