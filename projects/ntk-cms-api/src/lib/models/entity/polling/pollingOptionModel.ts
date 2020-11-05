import { BaseModuleEntity } from '../base/baseModuleEntity';
import { PollingContentModel } from './PollingContentModel';

export class PollingOptionModel   extends BaseModuleEntity<number> {

    option: string;
    optionAnswer: string;
    isCorrectAnswer: boolean;
    numberOfVotes: number;
    scoreOfVotes: number;
    linkPollingContentId: number;
    // tslint:disable-next-line: variable-name
    virtual_PollingContent: PollingContentModel;
    pollingContent: PollingContentModel;
}
