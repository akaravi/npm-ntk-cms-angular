import { BaseModuleEntity } from '../base/baseModuleEntity';
import { PollingContentModel } from './pollingContentModel';

export class PollingOptionModel   extends BaseModuleEntity<number> {
    Option: string;
    OptionAnswer: string;
    IsCorrectAnswer: boolean;
    NumberOfVotes: number;
    ScoreOfVotes: number;
    LinkPollingContentId: number;
    // tslint:disable-next-line: variable-name
    virtual_PollingContent: PollingContentModel;
    PollingContent: PollingContentModel;
}
