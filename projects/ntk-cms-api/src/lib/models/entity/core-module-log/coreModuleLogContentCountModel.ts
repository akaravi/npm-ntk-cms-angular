import { BaseModuleEntity } from '../base/baseModuleEntity';

export class CoreModuleLogContentCountModel extends BaseModuleEntity<string> {
  linkUserId?: number;

  linkMemberId: string;
  moduleName: string;
  moduleEntityName: string;
  moduleEntityId: string;
  rowCount: number;
}
