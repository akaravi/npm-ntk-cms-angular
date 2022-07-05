import { BaseModuleEntity } from '../base/baseModuleEntity';
export class CoreModuleLogMemoModel extends BaseModuleEntity<string> {
  moduleName: string;
  moduleEntityName: string;
  moduleEntityId: string;
  subjectBody: string;
  subjectTitle: string;
}
