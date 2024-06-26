import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class DonateLogViewModel extends BaseModuleEntity<string> {
  donateTargetId: number;
  deviceId: string;
  ipAddress: string;
  browserName: string;
  visitDate: Date;
  visitTimeInSecond: number;
  donateBillboardId?: number;
}
