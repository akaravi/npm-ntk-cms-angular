import { BaseEntity } from '../base/baseEntity';
import { BankPaymentPrivateSiteConfigModel } from './bankPaymentPrivateSiteConfigModel';

export class BankPaymentPublicConfigModel extends BaseEntity<number> {
  Title: string;
  ClassName: string;
  LinkModuleFileLogoId: number;
  LinkModuleFileLogoIdSrc: string;
  CurrencyUnit: string;
  PublicConfigJsonValues: string;
  Memo: string;
  PrivateSiteConfigs: BankPaymentPrivateSiteConfigModel[];
}
