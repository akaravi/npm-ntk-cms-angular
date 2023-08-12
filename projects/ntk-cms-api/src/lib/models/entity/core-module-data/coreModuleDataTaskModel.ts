import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class CoreModuleDataTaskModel extends BaseModuleEntity<string> {
  moduleName: string;
  moduleEntityName: string;
  moduleEntityId: string;
  subjectBody: string;
  subjectTitle: string;
  color: string;
  actionDate: Date;
  actionCompleted: boolean;
}

