
import { HyperShopOrderTypeEnum } from '../../enums/base/hyperShopOrderTypeEnum';
import { HyperShopPaymentTypeEnum } from '../../enums/base/hyperShopPaymentTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { HyperShopOrderContentModel } from './hyperShopOrderContentModel';
//@@tag-Version-2201011
/**
 * مدل سفارش هایپر شاپ
 */
export class HyperShopOrderModel extends BaseModuleEntity<number> {
  /** نوع پرداخت */
  paymentType: HyperShopPaymentTypeEnum;
  /** نوع سفارش */
  orderType: HyperShopOrderTypeEnum;
  /** شناسه تراکنش سیستم */
  systemTransactionId: number;
  /** وضعیت موفقیت پرداخت سیستم */
  systemPaymentIsSuccess: number;
  /** شناسه سفارش سرویس میکرو سیستم */
  systemMicroServiceOrderId: string;
  /** پذیرش سرویس میکرو سیستم */
  systemMicroServiceAccept: boolean;
  /** شناسه سرویس میکرو سیستم */
  systemMicroServiceId: string;
  /** موفقیت سرویس میکرو سیستم */
  systemMicroServiceIsSuccess: boolean;
  /** پیام خطای سرویس میکرو سیستم */
  systemMicroServiceErrorMessage: string;
  /** نام */
  name: string;
  /** نام خانوادگی */
  family: string;
  /** موبایل */
  mobile: string;
  /** موقعیت عرض جغرافیایی */
  geoLocationLatitude: string;
  /** موقعیت طول جغرافیایی */
  geoLocationLongitude: string;
  /** آدرس */
  address: string;
  /** مبلغ کل پرداختی */
  amount: number;
  /** مبلغ خالص فاکتور */
  amountPure: number;
  /** هزینه حمل و نقل */
  feeTransport: number;
  /** هزینه مالیات */
  feeTax: number;
  /** لیست محصولات سفارش */
  products: HyperShopOrderContentModel[];
}
