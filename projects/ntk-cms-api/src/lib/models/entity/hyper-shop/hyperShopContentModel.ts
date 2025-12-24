import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
/**
 * مدل محتوای هایپر شاپ (Cache)
 */
export class HyperShopContentModel extends BaseModuleEntity<string> {
  /** کد */
  code: string;
  /** نام */
  name: string;
  /** واحد */
  unit: string;
  /** واحد پول */
  currency: string;
  /** کد دسته‌بندی */
  categoryCode?: string;
  /** دسته‌بندی */
  category?: string;
  /** وضعیت */
  status: boolean;
  /** تصویر */
  image: string;
  /** یادداشت */
  memo: string;
  /** قیمت */
  price: number;
  /** قیمت فروش */
  salePrice?: number;
  /** تعداد */
  count: number;
  /** تخفیف */
  discount?: number;
  /** جزئیات کوتاه */
  shortDetails?: string;
  /** توضیحات */
  description?: string;
  /** محصول جدید است */
  newPro?: boolean;
  /** برند */
  brand?: string;
  /** فروش */
  sale?: boolean;
  /** تگ‌ها */
  tags?: string[];
  /** رنگ‌ها */
  colors?: string[];
}
