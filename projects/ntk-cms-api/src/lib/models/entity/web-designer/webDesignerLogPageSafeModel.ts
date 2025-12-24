import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
/**
 * مدل لاگ ذخیره امن صفحه وب دیزاینر
 */
export class WebDesignerLogPageSafeModel extends BaseModuleEntity<string> {
  /** لینک به شناسه صفحه اصلی CMS */
  linkCoreCmsPageId: string;
  /** مقدار JSON صفحه */
  pageJsonValue: string;
  /** یادداشت */
  memo: string;
}
