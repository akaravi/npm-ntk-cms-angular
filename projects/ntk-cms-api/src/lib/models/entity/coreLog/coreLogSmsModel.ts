import { EnumSendSmsStatusType } from '../../enums/enumSendSmsStatusType';
import { BaseEntity } from '../base/baseEntity';


export class CoreLogSmsModel extends BaseEntity<string>{
  SendStatusType: EnumSendSmsStatusType;
  LinkSiteId?: number;
  LinkMemberUserId?: number;
  ModuleName: string;
  ModuleEntityName: string;
  LinkUserId?: number;
  ModuleEntityId: string;
  FromNumber: string;
  ToNumber: string;
  Message: string;
  ApiNumber?: number;
  ReturnApi: string;
}
