import { BaseModuleEntity } from '../base/baseModuleEntity';
export class CoreModuleLogReportAbuseModel extends BaseModuleEntity<string> {
  LinkUserId?: number;
  LinkMemberUserId?: number;
  ModuleName: string;
  ModuleEntityName: string;
  ModuleEntityId: number;

  SubjectBody: string;
  SubjectUrl: string;
  AdminResultProcess: string;
}
