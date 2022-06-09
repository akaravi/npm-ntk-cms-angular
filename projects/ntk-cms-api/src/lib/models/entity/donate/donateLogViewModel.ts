import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DonateTargetCategoryModel } from './donateTargetCategoryModel';
import { DonateTargetPeriodSponsorModel } from './donateTargetPeriodSponsorModel';

export class DonateLogViewModel extends BaseModuleEntity<string> {
  donateTargetId: number;
  deviceId: string;
  ipAddress: string;
  browserName: string;
  visitDate: Date;
  visitTimeInSecond: number;
  donateBillboardId?: number;
}
