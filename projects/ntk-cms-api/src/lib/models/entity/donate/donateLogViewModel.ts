import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DonateTargetCategoryModel } from './donateTargetCategoryModel';
import { DonateTargetPeriodSponsorModel } from './donateTargetPeriodSponsorModel';

export class DonateLogViewModel extends BaseModuleEntity<string> {
  DonateTargetId: number;
  DeviceId: string;
  IpAddress: string;
  BrowserName: string;
  VisitDate: Date;
  VisitTimeInSecond: number;
  DonateBillboardId?: number;
}
