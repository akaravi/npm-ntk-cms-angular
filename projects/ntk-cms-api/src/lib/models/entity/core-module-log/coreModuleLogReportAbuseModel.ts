import { BaseModuleEntity } from '../base/baseModuleEntity';
export class CoreModuleLogReportAbuseModel extends BaseModuleEntity<string> {
  linkUserId?: number;
  linkMemberUserId?: number;
  moduleName: string;
  moduleEntityName: string;
  moduleEntityId: number;

  subjectBody: string;
  subjectUrl: string;
  adminResultProcess: string;
}
