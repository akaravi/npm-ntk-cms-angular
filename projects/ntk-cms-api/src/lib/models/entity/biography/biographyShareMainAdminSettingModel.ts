import { PaymentMethodEnum } from '../../enums/core/paymentMethodEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class BiographyShareMainAdminSettingModel extends BaseModuleEntity<number> {
  adminMainPriceFixed?: number;
  adminMainPricePercent?: number;
  description: string;
  paymentMethod: PaymentMethodEnum;
  reciverPriceCost?: number;
  title: string;
}
