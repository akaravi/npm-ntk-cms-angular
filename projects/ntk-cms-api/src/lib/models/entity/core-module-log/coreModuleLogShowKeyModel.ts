import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class CoreModuleLogShowKeyModel extends BaseModuleEntity<string> {
  moduleName: string;
  moduleEntityName: string;
  moduleEntityId: string;
  subjectTitle: string;
  expireDateTime: Date;
  showKey: number;
}
