import { BaseModuleEntity } from '../base/baseModuleEntity';

export class CoreModuleLogContentCountModel extends BaseModuleEntity<string> {
  linkUserId?: number;
  linkMemberUserId?: number;
  moduleName: string;
  moduleEntityName: string;
  moduleEntityId: string;
  rowCount: number;
}
