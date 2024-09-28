export class AnswerConfiguration {
    type: AnswerDataType;

    maxLength?: number | undefined;
    isRequired: boolean;
    ////validators = 'req email xyz';
    max?: number | undefined;
    min?: number | undefined;

    constructor(type: AnswerDataType, isRequired: boolean, maxLength?: number) {
        this.type = type;
        this.isRequired = isRequired;
        this.maxLength = maxLength ? maxLength : undefined;
    }
}

export enum AnswerDataType {
    exclusiveChoices,
    longText,
    text,
    inclusiveChoices,
    number,
    date,
    empty,
}

export class Answer {
    value: string | boolean | undefined;
    config: AnswerConfiguration;

    constructor(config: AnswerConfiguration) {
        this.config = config;
        this.value = undefined;
    }

    hasValue = (): boolean => {
        if (this.value == undefined) return false;
        if (typeof this.value === 'boolean' && this.value == false) return false;
        return this.value.toString().trim() != AnswerConstants.empty;
    };

    hasAffirmativeValue = (): boolean => AnswerConstants.trueString === this.value || true === this.value;

    hasNegativeValue = (): boolean => this.hasValue() && (AnswerConstants.falseString === this.value || false === this.value);
}

export abstract class AnswerConstants {
    static readonly empty = '';
    static readonly shortTextMaxLength = 50;
    static readonly longTextMaxLength = 3000;
    static readonly affirmativeYes = 'Yes';
    static readonly negativeNo = 'No';
    static readonly trueString = 'Y';
    static readonly falseString = 'N';
    static readonly required = true;
    static readonly explain = 'Please explain';
}
