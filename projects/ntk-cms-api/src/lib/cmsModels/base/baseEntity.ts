import { EnumRecordStatus } from '../Enums/enumRecordStatus';

export class BaseEntity<TKey> {
  Id: TKey;
  CreatedDate: Date;
  CreatedBy: number;
  UpdatedDate: Date;
  UpdatedBy: number;
  RecordStatus = EnumRecordStatus.Available;

  //region AntiInjection
  AntiInjectionRun: boolean;
  AntiInjectionGuid: string;
  AntiInjectionDate: Date;
  AntiInjectionTokenActionState: boolean;
  AntiInjectionExpiredMinute: number;
  AntiInjectionToken: string;
  AntiInjectionExpireDate: Date;
  //endregion AniInjection
}
