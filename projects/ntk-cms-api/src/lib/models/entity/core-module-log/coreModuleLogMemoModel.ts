import { BaseModuleEntity } from '../base/baseModuleEntity';
export class CoreModuleLogMemoModel extends BaseModuleEntity<string> {
  ModuleName: string;
  ModuleEntityName: string;
  ModuleEntityId: number;
  SubjectBody: string;
  SubjectTitle: string;
}
