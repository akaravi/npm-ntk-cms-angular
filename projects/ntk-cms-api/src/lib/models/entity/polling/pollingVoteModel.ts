import { BaseModuleEntity } from '../base/baseModuleEntity';

export class PollingVoteModel extends BaseModuleEntity<string> {
  linkPollingContentId: number;
  linkPollingOptionId: number;
  optionScore: number;
  deviceUserSerial: string;
  otherInfo: string;

}
