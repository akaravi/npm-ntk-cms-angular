import { BaseModuleEntity } from '../base/baseModuleEntity';
import { WebDesignerMainPageTemplateSiteCategoryModel } from './webDesignerMainPageTemplateSiteCategoryModel';
//@@tag-Version-2201011
/**
 * مدل قالب صفحه اصلی وب دیزاینر
 */
export class WebDesignerMainPageTemplateModel extends BaseModuleEntity<string> {
  /** عنوان */
  title: string;
  /** عنوان چندزبانه */
  titleML: string;
  /** عنوان برای ترجمه */
  titleResourceLanguage: string;
  /** نام پوشه */
  folder: string;
  /** فایل ایندکس */
  indexFile: string;
  /** منتشر شده است */
  isPublish: boolean;
  /** توضیحات */
  description: string;
  /** لیست دسته‌بندی‌های سایت قالب صفحه */
  pageTemplateSiteCategores: WebDesignerMainPageTemplateSiteCategoryModel[];
}
