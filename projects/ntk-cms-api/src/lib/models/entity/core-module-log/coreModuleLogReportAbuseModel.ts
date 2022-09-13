import { BaseModuleEntity } from '../base/baseModuleEntity';
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
