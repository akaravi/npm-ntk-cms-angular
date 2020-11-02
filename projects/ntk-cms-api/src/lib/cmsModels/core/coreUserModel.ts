import { BaseEntity } from '../base/baseEntity';
import { EnumGenderType } from '../Enums/enumGenderType';

export class CoreUserModel extends BaseEntity<number> {
  Username: string;
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
  LinkMainImageId: number;
  Tell: string;
  IsCompany: boolean;
  LinkLocationId: number;
  FirewallAllowIP: string;
}
