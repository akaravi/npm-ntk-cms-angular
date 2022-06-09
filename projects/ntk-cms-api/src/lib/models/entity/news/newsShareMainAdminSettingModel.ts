import { EnumPaymentMethod } from '../../enums/core/enumPaymentMethod';
import { BaseModuleEntity } from '../base/baseModuleEntity';

export class NewsShareMainAdminSettingModel extends BaseModuleEntity<number> {
  adminMainPriceFixed?: number;
  adminMainPricePercent?: number;
  description: string;
  paymentMethod: EnumPaymentMethod;
  reciverPriceCost?: number;
  title: string;
}
