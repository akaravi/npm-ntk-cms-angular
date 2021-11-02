import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementBillboardModel } from './linkManagementBillboardModel';
import { LinkManagementTargetModel } from './linkManagementTargetModel';

export class LinkManagementTargetBillboardLogModel extends BaseModuleEntity<number> {
  ClickPrice: number;
  ViewPrice: number;
  DeviceId: string;
  IpAddress: string;
  BrowserName: string;
  VisitDate: Date;
  LinkManagementBillboardId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Billboard: LinkManagementBillboardModel;
  Billboard: LinkManagementBillboardModel;
  LinkManagementTargetId: number;
  // tslint:disable-next-line: variable-name
  virtual_Target: LinkManagementTargetModel;
  Target: LinkManagementTargetModel;
}
