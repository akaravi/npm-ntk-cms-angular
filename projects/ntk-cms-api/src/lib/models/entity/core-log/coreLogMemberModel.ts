import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
export class CoreLogMemberModel extends BaseEntity<string>{
  linkCoreUserId?: number;
  linkApplicationMemberUserId?: number;
  linkWebDesignerMemberUserId: string;
  description: string;
}

