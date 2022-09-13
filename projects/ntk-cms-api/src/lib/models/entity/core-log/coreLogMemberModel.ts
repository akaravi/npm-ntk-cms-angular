import { BaseEntity } from '../base/baseEntity';

export class CoreLogMemberModel extends BaseEntity<string>{
  linkCoreUserId?: number;
  linkApplicationMemberUserId?: number;
  linkWebDesignerMemberUserId: string;
  description: string;
}

