import { BaseModuleEntity } from "../base/baseModuleEntity";

//@@tag-Version-2201011
/**
 * لیست قیمت تأمین‌کننده (Supplier Price List)
 * شامل اطلاعات محصول، قیمت، شرایط پرداخت و تحویل
 */
export class CrmSupplierPriceListModel extends BaseModuleEntity<string> {
  /** لینک به حساب تأمین‌کننده */
  linkAccountId?: string;
  /** نام محصول / کالا */
  productName: string;
  /** کد محصول */
  productCode: string;
  /** مشخصات / سایز / استاندارد */
  specification: string;
  /** واحد (kg/ton/pcs/...) */
  unit: string;
  /** قیمت واحد */
  unitPrice: number;
  /** واحد پول (IRR/USD/...) */
  currency: string;
  /** شرایط پرداخت */
  paymentTerms: string;
  /** شرایط تحویل */
  deliveryTerms: string;
  /** تاریخ شروع اعتبار */
  validFrom?: Date;
  /** تاریخ پایان اعتبار */
  validTo?: Date;
  /** لینک فایل لیست قیمت (ماژول فایل) */
  linkPriceListFileId?: number;
  /** یادداشت یا توضیح */
  notes: string;
}


