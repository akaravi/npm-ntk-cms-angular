import { RecordStatusEnum } from '../../enums/base/recordStatusEnum';
//@@tag-Version-2201011
export class BaseEntity<TKey> {
  id: TKey;
  createdDate: Date;
  createdBy: number;
  updatedDate: Date;
  updatedBy: number;
  recordStatus = RecordStatusEnum.Available;

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
