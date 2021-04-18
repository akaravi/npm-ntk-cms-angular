import { EnumGenderType } from '../../enums/enumGenderType';
import { BaseEntity } from '../base/baseEntity';

export class CoreUserModel extends BaseEntity<number> {
  Username: string;
  Pwd: string;
  ExpireDate: Date;
  Email: string;
  EmailConfirmed: boolean;
  Mobile: string;
  MobileConfirmed: boolean;
  ExpireLockAccount: Date;
  Name: string;
  LastName: string;
  BirthDay: Date;
  Gender: EnumGenderType;
  CompanyName: string;
  Address: string;
  PostalCode: string;
  LinkMainImageId?: number;
  LinkMainImageIdSrc: string;
  Tell: string;
  IsCompany: boolean;
  LinkLocationId: number;
  FirewallAllowIP: string;
}
