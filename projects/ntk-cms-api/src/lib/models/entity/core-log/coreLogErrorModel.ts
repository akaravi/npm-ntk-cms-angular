import { BaseEntity } from '../base/baseEntity';

export class CoreLogErrorModel extends BaseEntity<string>{
  linkUserId?: number;
  linkMemberId: string;
  moduleName: string;
  moduleEntityName: string;
  moduleEntityId: number;
  description: string;
}
