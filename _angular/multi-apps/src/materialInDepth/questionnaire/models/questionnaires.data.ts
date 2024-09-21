import { AnswerConstants, AnswerDataType } from './answer.model';
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
                answerDataType: AnswerDataType.exclusiveChoices,
                childTrigger: ChildQuestionTriggeredFuncs.hasAffirmativeAnser,
                children: [
                    {
                        id: 'cCompany_Explain',
                        label: undefined,
                        text: 'Please explain',
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
                answerDataType: AnswerDataType.exclusiveChoices,
                childTrigger: ChildQuestionTriggeredFuncs.hasNegativeAnser,
                children: [
                    {
                        id: 'cQuestionnaire1_Explain',
                        label: undefined,
                        text: 'Please explain',
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
                childTrigger: ChildQuestionTriggeredFuncs.hasAffirmativeAnser,
                children: [
                    {
                        id: 'cQuestionnaire2_Explain',
                        label: undefined,
                        text: 'Percentage',
                        answerDataType: AnswerDataType.shortText,
                        childTrigger: null,
                        children: [],
                    },
                ],
            },
            {
                id: '-999',
                label: '4',
                text: 'This question is a container hosting a group of choices child questions',
                answerDataType: AnswerDataType.none,
                childTrigger: ChildQuestionTriggeredFuncs.none,
                children: [
                    {
                        id: 'cTruckType_flatbed',
                        label: 'Flatbed',
                        text: 'Flatbed',
                        answerDataType: AnswerDataType.inclusiveChoices,
                        childTrigger: null,
                        children: [],
                    },
                    {
                        id: 'cTruckType_tanker',
                        label: 'Tanker',
                        text: 'Tanker',
                        answerDataType: AnswerDataType.inclusiveChoices,
                        childTrigger: null,
                        children: [],
                    },
                    {
                        id: 'cTruckType_other',
                        label: 'Other',
                        text: 'Other',
                        answerDataType: AnswerDataType.inclusiveChoices,
                        childTrigger: ChildQuestionTriggeredFuncs.hasAffirmativeAnser,
                        children: [
                            {
                                id: 'cTruckType_other_Explain',
                                label: undefined,
                                text: 'Please explain',
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
                answerDataType: AnswerDataType.exclusiveChoices,
                childTrigger: ChildQuestionTriggeredFuncs.hasAffirmativeAnser,
                children: [
                    {
                        id: 'cCompany_Explain',
                        label: undefined,
                        text: 'Please explain',
                        answerDataType: AnswerDataType.longText,
                        childTrigger: null,
                        children: [],
                    },
                ],
            }
        ],
    },

    {
        label: 'Burgers',
        displayOrder: 1,
        name: 'all about burgers',
        rules: null,
        questions: [],
    }
];
