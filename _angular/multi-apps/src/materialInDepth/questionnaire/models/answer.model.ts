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
    boolean,
    longText,
    shortText,
    multipleText,
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
