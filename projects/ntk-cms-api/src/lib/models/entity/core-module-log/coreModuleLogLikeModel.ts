import { BaseModuleEntity } from '../base/baseModuleEntity';

export class CoreModuleLogLikeModel extends BaseModuleEntity<string> {
  linkUserId?: number;

  linkMemberId: string;
  moduleName: string;
  moduleEntityName: string;
  moduleEntityId: string;
  liked: boolean;
  existBeforAndChangeNow: boolean;
}
