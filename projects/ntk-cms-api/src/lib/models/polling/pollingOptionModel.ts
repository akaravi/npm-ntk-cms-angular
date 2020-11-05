import { BaseModuleEntity } from '../base/baseModuleEntity';

export class PollingOptionModel   extends BaseModuleEntity<number> {

    option: string;
    optionAnswer: string;
    isCorrectAnswer: boolean;
    numberOfVotes: number;
    scoreOfVotes: number;
    linkPollingContentId: number;
    virtual_PollingContent: PollingContentModel;
    pollingContent: PollingContentModel;
}
