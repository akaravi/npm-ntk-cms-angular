import { EnumRecordStatus } from '../../enums/enumRecordStatus';

export class BaseEntity<TKey> {
  id: TKey;
  createdDate: Date;
  createdBy: number;
  updatedDate: Date;
  updatedBy: number;
  recordStatus = EnumRecordStatus.Available;

  //region AntiInjection
  antiInjectionRun: boolean;
  antiInjectionGuid: string;
  antiInjectionDate: Date;
  antiInjectionTokenActionState: boolean;
  antiInjectionExpiredMinute: number;
  antiInjectionToken: string;
  antiInjectionExpireDate: Date;
  //endregion AniInjection
}
