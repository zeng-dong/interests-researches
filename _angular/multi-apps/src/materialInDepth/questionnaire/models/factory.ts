import { Answer } from './answer.model';
import { Question, QuestionDefinition } from './question.model';

export function createQuestion(def: QuestionDefinition): Question | undefined {
    return createQuestionImpl(def);
}

function createQuestionImpl(def: QuestionDefinition): Question | undefined {
    const q = new Question(def.id, def.label, def.text, [], def.type, new Answer(def.answerConfig));
    if (def.childTrigger) q.trigger = def.childTrigger;
    def.children.forEach((childDef) => {
        const child = createQuestionImpl(childDef);
        if (child) q.children.push(child);
    });

    return q;
}
