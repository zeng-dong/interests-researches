import { AnswerConstants, AnswerDataType } from './answer.model';
import { QuestionConstants, QuestionType } from './question.model';
import { SectionDefinition, QuestionnaireSection, ChildQuestionTriggeredFuncs } from './questionnaire-section.model';

//// definition of questionnaire

export const picBizQx: SectionDefinition[] = [
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
                    target.answer.value = AnswerConstants.empty;
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
                type: QuestionType.single,
                answerDataType: AnswerDataType.exclusiveChoices,
                childTrigger: ChildQuestionTriggeredFuncs.hasAffirmativeAnser,
                children: [
                    {
                        id: 'cCompany_Explain',
                        label: undefined,
                        text: 'Please explain',
                        type: QuestionType.single,
                        answerDataType: AnswerDataType.longText,
                        childTrigger: null,
                        children: [],
                    },
                ],
            },
            {
                id: 'cQuestionnaire1',
                label: '2',
                text: 'Is your company doing well and even better',
                type: QuestionType.single,
                answerDataType: AnswerDataType.exclusiveChoices,
                childTrigger: ChildQuestionTriggeredFuncs.hasNegativeAnser,
                children: [
                    {
                        id: 'cQuestionnaire1_Explain',
                        label: undefined,
                        text: 'Please explain',
                        type: QuestionType.single,
                        answerDataType: AnswerDataType.longText,
                        childTrigger: null,
                        children: [],
                    },
                ],
            },
            {
                id: 'cQuestionnaire2',
                label: '3',
                text: 'This question is standard yes/no selection and trigger a child short text',
                answerDataType: AnswerDataType.exclusiveChoices,
                type: QuestionType.single,
                childTrigger: ChildQuestionTriggeredFuncs.hasAffirmativeAnser,
                children: [
                    {
                        id: 'cQuestionnaire2_Explain',
                        label: undefined,
                        text: 'Percentage',
                        type: QuestionType.single,
                        answerDataType: AnswerDataType.shortText,
                        childTrigger: null,
                        children: [],
                    },
                ],
            },
            {
                id: QuestionConstants.emptyId,
                label: '4',
                text: 'This question is a container hosting a group of choices child questions',
                type: QuestionType.group,
                answerDataType: AnswerDataType.none,
                childTrigger: ChildQuestionTriggeredFuncs.none,
                children: [
                    {
                        id: 'cTruckType_flatbed',
                        label: undefined,
                        text: 'Flatbed',
                        type: QuestionType.single,
                        answerDataType: AnswerDataType.inclusiveChoices,
                        childTrigger: null,
                        children: [],
                    },
                    {
                        id: 'cTruckType_tanker',
                        label: undefined,
                        text: 'Tanker',
                        type: QuestionType.single,
                        answerDataType: AnswerDataType.inclusiveChoices,
                        childTrigger: null,
                        children: [],
                    },
                    {
                        id: 'cTruckType_other',
                        label: undefined,
                        text: 'Other',
                        type: QuestionType.single,
                        answerDataType: AnswerDataType.inclusiveChoices,
                        childTrigger: ChildQuestionTriggeredFuncs.hasAffirmativeAnser,
                        children: [
                            {
                                id: 'cTruckType_other_Explain',
                                label: undefined,
                                text: 'Please explain',
                                type: QuestionType.single,
                                answerDataType: AnswerDataType.longText,
                                childTrigger: null,
                                children: [],
                            },
                        ],
                    },
                ],
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

export const foodQx: SectionDefinition[] = [
    {
        label: 'Noodles',
        displayOrder: 0,
        name: 'Noodles and noodle soups',
        rules: (section: QuestionnaireSection) => {
            const source = section.getQuestionById('cCompany');
            const target = section.getQuestionById('cQuestionnaire1');
            if (source && target) {
                if (source.answer.hasAffirmativeValue()) {
                    target.applicable = false;
                    target.answer.value = AnswerConstants.empty;
                } else {
                    target.applicable = true;
                }
            }
        },
        questions: [
            {
                id: 'noodles-lover',
                label: '1',
                text: 'Do you like noodles',
                type: QuestionType.single,
                answerDataType: AnswerDataType.exclusiveChoices,
                childTrigger: ChildQuestionTriggeredFuncs.hasAffirmativeAnser,
                children: [
                    {
                        id: 'cCompany_Explain',
                        label: undefined,
                        text: 'Please explain',
                        type: QuestionType.single,
                        answerDataType: AnswerDataType.longText,
                        childTrigger: null,
                        children: [],
                    },
                ],
            },
        ],
    },

    {
        label: 'Burgers',
        displayOrder: 1,
        name: 'all about burgers',
        rules: null,
        questions: [],
    },
];
