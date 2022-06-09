import { BaseModuleEntity } from '../base/baseModuleEntity';

export class CoreModuleLogLikeModel extends BaseModuleEntity<string> {
  linkUserId?: number;
  linkMemberUserId?: number;
  moduleName: string;
  moduleEntityName: string;
  moduleEntityId: number;
  liked: boolean;
  existBeforAndChangeNow: boolean;
}
