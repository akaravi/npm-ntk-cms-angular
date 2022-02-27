import { BaseModuleEntity } from '../base/baseModuleEntity';
export class CoreModuleLogReportAbuseModel extends BaseModuleEntity<string> {
    ModuleName: string;
    ModuleEntityName: string;
    LinkUserId?: number;
    LinkMemberUserId?: number;
    EntityId: number;
    SubjectBody:string;
    AdminResultProcess:string;
}
