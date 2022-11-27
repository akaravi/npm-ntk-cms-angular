import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementBillboardModel } from './linkManagementBillboardModel';
import { LinkManagementTargetModel } from './linkManagementTargetModel';
//@@tag-Version-2201011
export class LinkManagementTargetBillboardLogModel extends BaseModuleEntity<string> {
  clickPrice: number;
  viewPrice: number;
  deviceId: string;
  ipAddress: string;
  browserName: string;
  visitTimeInSecond: number;
  linkManagementBillboardId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Billboard: LinkManagementBillboardModel;
  billboard: LinkManagementBillboardModel;
  linkManagementTargetId: number;
  // tslint:disable-next-line: variable-name
  virtual_Target: LinkManagementTargetModel;
  target: LinkManagementTargetModel;
}
