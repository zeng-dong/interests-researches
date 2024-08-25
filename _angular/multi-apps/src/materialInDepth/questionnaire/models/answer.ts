export class AnswerConfiguration {
    type: AnswerDataType;
    maxLength: number | undefined;

    constructor(type: AnswerDataType, maxLength?: number) {
        this.type = type;
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
}
