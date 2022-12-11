import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2212111
export class CoreLogReportDataModel extends BaseEntity<string>{
  linkSiteId?: number;
  linkUserId?: number;
  linkMemberId: string;
  linkModuleEntityId: number;
  linkModuleEntityReportFileId: string;
  moduleEntityId: string;
  expireDate: Date;
  reportFileId: number;
  reportData: string;
}
