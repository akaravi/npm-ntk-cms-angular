import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2212081
export class CoreLogReportDataModel extends BaseEntity<string>{
  linkSiteId?: number;
  linkUserId?: number;
  linkMemberId: string;
  linkEntityReportFileId: string;
  moduleEntityId: string;
  expireDate: Date;
  reportFileId: number;
  reportData: string;
}
