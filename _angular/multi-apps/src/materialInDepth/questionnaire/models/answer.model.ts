export class AnswerConfiguration {
    type: AnswerDataType;
    maxLength: number | undefined;
    isRequired: boolean;
    ////validators = 'req email xyz';

    constructor(type: AnswerDataType, isRequired: boolean, maxLength?: number) {
        this.type = type;
        this.isRequired = isRequired;
        this.maxLength = maxLength ? maxLength : undefined;
    }
}

export enum AnswerDataType {
    boolean,                /// boolean is for checkbox,
    longText,
    shortText,
    multipleText,

    /// for yes/no radio group, type: yesOrNo
}

export class Answer {
    value: string | boolean | undefined;
    config: AnswerConfiguration;

    constructor(config: AnswerConfiguration) {
        this.config = config;
        this.value = undefined;
    }

    hasValue = (): boolean => this.value != undefined;

    hasAffirmativeValue = (): boolean => 'Y' === this.value;
}
