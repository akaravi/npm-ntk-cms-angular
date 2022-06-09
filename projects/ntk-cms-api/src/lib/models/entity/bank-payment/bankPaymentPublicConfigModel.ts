import { BaseEntity } from '../base/baseEntity';
import { BankPaymentPrivateSiteConfigModel } from './bankPaymentPrivateSiteConfigModel';

export class BankPaymentPublicConfigModel extends BaseEntity<number> {
  title: string;
  className: string;
  linkModuleFileLogoId: number;
  linkModuleFileLogoIdSrc: string;
  linkCurrencyId: number;
  publicConfigJsonValues: string;
  memo: string;
  privateSiteConfigs: BankPaymentPrivateSiteConfigModel[];
}
