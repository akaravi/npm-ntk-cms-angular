import { BaseEntity } from '../base/baseEntity';

export class CoreLogErrorModel extends BaseEntity<string>{
  LinkUserId?: number;
  LinkMemberUserId?: number;
  ModuleName: string;
  ModuleEntityName: string;
  ModuleEntityId: number;
  Description: string;
}
