import { EnumPaymentMethod } from '../../enums/core/enumPaymentMethod';
import { BaseModuleEntity } from '../base/baseModuleEntity';

export class BlogShareMainAdminSettingModel extends BaseModuleEntity<number> {
  AdminMainPriceFixed?: number;
  AdminMainPricePercent?: number;
  Description: string;
  PaymentMethod: EnumPaymentMethod;
  ReciverPriceCost?: number;
  Title: string;
}
