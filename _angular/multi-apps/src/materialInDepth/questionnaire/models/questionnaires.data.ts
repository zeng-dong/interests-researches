import { AnswerConstants, AnswerDataType } from './answer.model';
import { QuestionConstants, QuestionType } from './question.model';
import { SectionDefinition, QuestionnaireSection, ChildQuestionTriggeredFuncs } from './questionnaire-section.model';

export interface QuestionnaireDefinition {
    name: string;
    config?: {
        [index: string]: any;
    };
    sections: SectionDefinition[];
}

//// definition of questionnaire sections

export const picBizQx: SectionDefinition[] = [
    {
        label: 'Questions 1-8',
        displayOrder: 0,
        name: 'acord125',
        rules: (section: QuestionnaireSection) => {
            const source = section.getQuestionById('cCompany');
            const target1 = section.getQuestionById('cQuestionnaire1');
            const target2 = section.getQuestionById('cCompany_not_well');
            if (source && target1) {
                if (source.answer.hasNegativeValue()) {
                    target1.applicable = false;
                    target1.answer.value = AnswerConstants.empty;
                } else {
                    target1.applicable = true;
                }
            }
            if (source && target2) {
                if (source.answer.hasAffirmativeValue()) {
                    target2.applicable = false;
                    target2.answer.value = AnswerConstants.empty;
                } else {
                    target2.applicable = true;
                }
            }
        },
        questions: [
            {
                id: 'cCompany',
                label: '1',
                text: 'Is your company doing well?',
                type: QuestionType.single,
                answerConfig: {
                    type: AnswerDataType.exclusiveChoices,
                    isRequired: true,
                },
                childTrigger: ChildQuestionTriggeredFuncs.hasAffirmativeAnswer,
                children: [
                    {
                        id: 'cCompany_Explain',
                        label: undefined,
                        text: 'Please explain',
                        type: QuestionType.single,
                        answerConfig: {
                            type: AnswerDataType.longText,
                            maxLength: AnswerConstants.longTextMaxLength,
                            isRequired: true,
                        },
                        childTrigger: null,
                        children: [],
                    },
                ],
            },
            {
                id: 'cQuestionnaire1',
                label: '2',
                text: 'Do you know why your company is doing well?',
                type: QuestionType.single,
                answerConfig: {
                    type: AnswerDataType.exclusiveChoices,
                    isRequired: true,
                },
                childTrigger: ChildQuestionTriggeredFuncs.hasAffirmativeAnswer,
                children: [
                    {
                        id: 'cQuestionnaire1_Explain',
                        label: undefined,
                        text: 'Please explain',
                        type: QuestionType.single,
                        answerConfig: {
                            type: AnswerDataType.longText,
                            maxLength: AnswerConstants.longTextMaxLength,
                            isRequired: true,
                        },
                        childTrigger: null,
                        children: [],
                    },
                ],
            },

            {
                id: 'cCompany_not_well',
                label: '3',
                text: 'Do you know why your company is not doing well?',
                type: QuestionType.single,
                answerConfig: {
                    type: AnswerDataType.exclusiveChoices,
                    isRequired: true,
                },
                childTrigger: ChildQuestionTriggeredFuncs.hasAffirmativeAnswer,
                children: [
                    {
                        id: 'cCompany_not_well_Explain',
                        label: undefined,
                        text: 'Please explain',
                        type: QuestionType.single,
                        answerConfig: {
                            type: AnswerDataType.longText,
                            maxLength: AnswerConstants.longTextMaxLength,
                            isRequired: true,
                        },
                        childTrigger: null,
                        children: [],
                    },
                ],
            },

            {
                id: 'cQuestionnaire2',
                label: '4',
                text: 'This question is standard yes/no selection and trigger a child short text',
                answerConfig: {
                    type: AnswerDataType.exclusiveChoices,
                    isRequired: true,
                },
                type: QuestionType.single,
                childTrigger: ChildQuestionTriggeredFuncs.hasAffirmativeAnswer,
                children: [
                    {
                        id: 'cQuestionnaire2_Explain',
                        label: undefined,
                        text: 'Your name',
                        type: QuestionType.single,
                        answerConfig: {
                            type: AnswerDataType.text,
                            maxLength: AnswerConstants.shortTextMaxLength,
                            isRequired: true,
                        },
                        childTrigger: null,
                        children: [],
                    },
                ],
            },

            {
                id: 'cQuestionnaireNumberSample',
                label: '5',
                text: 'This question is standard yes/no selection and trigger a child number',
                answerConfig: {
                    type: AnswerDataType.exclusiveChoices,
                    isRequired: true,
                },
                type: QuestionType.single,
                childTrigger: ChildQuestionTriggeredFuncs.hasAffirmativeAnswer,
                children: [
                    {
                        id: 'cQuestionnaireNumberSample_Explain',
                        label: undefined,
                        text: 'Percentage',
                        type: QuestionType.single,
                        answerConfig: {
                            type: AnswerDataType.number,
                            isRequired: true,
                        },
                        childTrigger: null,
                        children: [],
                    },
                ],
            },

            {
                id: 'cQuestionnaireDateSample',
                label: '6',
                text: 'This question is standard yes/no selection and trigger a child date',
                answerConfig: {
                    type: AnswerDataType.exclusiveChoices,
                    isRequired: true,
                },
                type: QuestionType.single,
                childTrigger: ChildQuestionTriggeredFuncs.hasAffirmativeAnswer,
                children: [
                    {
                        id: 'cQuestionnaireDateSample_Explain',
                        label: undefined,
                        text: 'Your Birth Date',
                        type: QuestionType.single,
                        answerConfig: {
                            type: AnswerDataType.date,
                            isRequired: true,
                        },
                        childTrigger: null,
                        children: [],
                    },
                ],
            },

            {
                id: QuestionConstants.emptyId,
                label: '7',
                text: 'This question is a container hosting a group of choices child questions',
                type: QuestionType.group,
                answerConfig: {
                    type: AnswerDataType.none,
                    isRequired: true,
                },
                childTrigger: ChildQuestionTriggeredFuncs.none,
                children: [
                    {
                        id: 'cTruckType_flatbed',
                        label: undefined,
                        text: 'Flatbed',
                        type: QuestionType.single,
                        answerConfig: {
                            type: AnswerDataType.inclusiveChoices,
                            isRequired: false,
                        },
                        childTrigger: null,
                        children: [],
                    },
                    {
                        id: 'cTruckType_tanker',
                        label: undefined,
                        text: 'Tanker',
                        type: QuestionType.single,
                        answerConfig: {
                            type: AnswerDataType.inclusiveChoices,
                            isRequired: false,
                        },
                        childTrigger: null,
                        children: [],
                    },
                    {
                        id: 'cTruckType_other',
                        label: undefined,
                        text: 'Other',
                        type: QuestionType.single,
                        answerConfig: {
                            type: AnswerDataType.inclusiveChoices,
                            isRequired: false,
                        },
                        childTrigger: ChildQuestionTriggeredFuncs.hasAffirmativeAnswer,
                        children: [
                            {
                                id: 'cTruckType_other_Explain',
                                label: undefined,
                                text: 'Please explain',
                                type: QuestionType.single,
                                answerConfig: {
                                    type: AnswerDataType.longText,
                                    maxLength: AnswerConstants.longTextMaxLength,
                                    isRequired: true,
                                },
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
        questions: [
            {
                id: 'qus17',
                label: '17',
                text: 'This question is not for Missouri. Are you missouri?',
                type: QuestionType.single,
                answerConfig: {
                    type: AnswerDataType.exclusiveChoices,
                    isRequired: true,
                },
                childTrigger: ChildQuestionTriggeredFuncs.hasAffirmativeAnswer,
                children: [
                    {
                        id: 'qus17_Explain',
                        label: undefined,
                        text: 'Please explain',
                        type: QuestionType.single,
                        answerConfig: {
                            type: AnswerDataType.longText,
                            maxLength: AnswerConstants.longTextMaxLength,
                            isRequired: true,
                        },
                        childTrigger: null,
                        children: [],
                    },
                ],
            },
            {
                id: 'qus24',
                label: '24',
                text: 'This question is not for canngen, are you canngen?',
                type: QuestionType.single,
                answerConfig: {
                    type: AnswerDataType.exclusiveChoices,
                    isRequired: true,
                },
                childTrigger: ChildQuestionTriggeredFuncs.hasAffirmativeAnswer,
                children: [
                    {
                        id: 'qus24_Explain',
                        label: undefined,
                        text: 'Please explain',
                        type: QuestionType.single,
                        answerConfig: {
                            type: AnswerDataType.longText,
                            maxLength: AnswerConstants.longTextMaxLength,
                            isRequired: true,
                        },
                        childTrigger: null,
                        children: [],
                    },
                ],
            },
        ],
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
                answerConfig: {
                    type: AnswerDataType.exclusiveChoices,
                    isRequired: true,
                },
                childTrigger: ChildQuestionTriggeredFuncs.hasAffirmativeAnswer,
                children: [
                    {
                        id: 'cCompany_Explain',
                        label: undefined,
                        text: 'Please explain',
                        type: QuestionType.single,
                        answerConfig: {
                            type: AnswerDataType.longText,
                            maxLength: AnswerConstants.longTextMaxLength,
                            isRequired: false,
                        },
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

export const offerrings: QuestionnaireDefinition[] = [
    {
        name: 'truck questionnaire',
        sections: picBizQx,
    },
    {
        name: 'Food Survey',
        sections: foodQx,
    },
    {
        name: 'Music Questionnaire',
        sections: [],
    },
    {
        name: 'Sports Questionnaire',
        sections: [],
    },
];
