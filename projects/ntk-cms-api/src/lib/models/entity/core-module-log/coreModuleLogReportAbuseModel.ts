import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class CoreModuleLogReportAbuseModel extends BaseModuleEntity<string> {
  linkUserId?: number;

  linkMemberId: string;
  moduleName: string;
  moduleEntityName: string;
  moduleEntityId: string;

  subjectBody: string;
  subjectUrl: string;
  adminResultProcess: string;
}
