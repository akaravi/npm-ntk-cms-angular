import { MenuPlaceTypeEnum } from '../../enums/base/menuPlaceTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
/**
 * مدل منوی اصلی وب دیزاینر
 */
export class WebDesignerMainMenuModel extends BaseModuleEntity<string> {
  /** عنوان */
  title: string;
  /** عنوان چندزبانه */
  titleML: string;
  /** عنوان برای ترجمه */
  titleResourceLanguage: string;
  /** رنگ */
  color: string;
  /** آیکون */
  icon: string;
  /** آدرس مسیر لینک */
  routeAddressLink: string;
  /** باز شدن در صفحه جدید */
  routeAddressBlankPage: boolean;
  /** لینک به شناسه والد */
  linkParentId: string;
  /** توضیحات */
  description: string;
  /** ترتیب نمایش در منو */
  showInMenuOrder: number;
  /** نوع مکان منو */
  menuPlaceType: MenuPlaceTypeEnum;
  /** لیست منوهای فرزند */
  children: WebDesignerMainMenuModel[];
}
