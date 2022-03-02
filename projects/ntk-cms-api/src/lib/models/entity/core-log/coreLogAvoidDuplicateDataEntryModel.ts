import { BaseEntity } from '../base/baseEntity';

export class CoreLogAvoidDuplicateDataEntryModel extends BaseEntity<string>{
  LinkUserId?: number;
  LinkMemberUserId?: number;
  ModuleName: string;
  ModuleEntityName: string;
  ModuleEntityId: number;
}

