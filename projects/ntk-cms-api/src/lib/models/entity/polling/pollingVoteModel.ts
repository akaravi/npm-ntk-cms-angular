import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class PollingVoteModel extends BaseModuleEntity<string> {
  linkPollingContentId: number;
  linkPollingOptionId: number;
  optionScore: number;
  deviceUserSerial: string;
  otherInfo: string;

  linkMemberId: string;
}
