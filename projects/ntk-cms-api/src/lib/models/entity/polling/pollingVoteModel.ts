import { BaseModuleEntity } from '../base/baseModuleEntity';

export class PollingVoteModel extends BaseModuleEntity<number> {
  LinkPollingContentId: number;
  LinkPollingOptionId: number;
  OptionScore: number;
  DeviceUserSerial: string;
  OtherInfo: string;
}
