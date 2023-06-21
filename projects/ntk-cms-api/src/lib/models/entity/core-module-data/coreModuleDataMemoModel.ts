import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class CoreModuleDataMemoModel extends BaseModuleEntity<string> {
  moduleName: string;
  moduleEntityName: string;
  moduleEntityId: string;
  subjectBody: string;
  subjectTitle: string;
}
