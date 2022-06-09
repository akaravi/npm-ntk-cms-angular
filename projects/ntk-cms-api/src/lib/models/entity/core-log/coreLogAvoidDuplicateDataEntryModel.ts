import { BaseEntity } from '../base/baseEntity';

export class CoreLogAvoidDuplicateDataEntryModel extends BaseEntity<string>{
  linkUserId?: number;
  linkMemberUserId?: number;
  moduleName: string;
  moduleEntityName: string;
  moduleEntityId: number;
}

