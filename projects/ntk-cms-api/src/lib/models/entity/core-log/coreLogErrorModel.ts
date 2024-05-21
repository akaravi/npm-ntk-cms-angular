import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
export class CoreLogErrorModel extends BaseEntity<string> {
  linkUserId?: number;
  linkMemberId: string;
  moduleName: string;
  moduleEntityName: string;
  moduleEntityId: number;
  description: string;
}
