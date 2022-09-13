import { BaseEntity } from '../base/baseEntity';

export class CoreLogAvoidDuplicateDataEntryModel extends BaseEntity<string>{
  linkUserId?: number;


  linkMemberId: string;


  moduleName: string;
  moduleEntityName: string;
  moduleEntityId: number;
}

