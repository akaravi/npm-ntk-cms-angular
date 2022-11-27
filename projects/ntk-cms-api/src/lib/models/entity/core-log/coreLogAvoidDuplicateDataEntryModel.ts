import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
export class CoreLogAvoidDuplicateDataEntryModel extends BaseEntity<string>{
  linkUserId?: number;


  linkMemberId: string;


  moduleName: string;
  moduleEntityName: string;
  moduleEntityId: number;
}

