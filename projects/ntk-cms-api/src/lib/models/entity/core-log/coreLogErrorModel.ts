import { BaseEntity } from '../base/baseEntity';

export class CoreLogErrorModel extends BaseEntity<string>{
  linkUserId?: number;
  linkMemberUserId?: number;
  moduleName: string;
  moduleEntityName: string;
  moduleEntityId: number;
  description: string;
}
