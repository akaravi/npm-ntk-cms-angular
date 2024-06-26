import { BaseModuleEntity } from '../base/baseModuleEntity';
import { PollingContentModel } from './pollingContentModel';
//@@tag-Version-2201011
export class PollingOptionModel extends BaseModuleEntity<number> {
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
