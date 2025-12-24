import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
/**
 * مدل وابستگی صفحه اصلی وب دیزاینر
 */
export class WebDesignerMainPageDependencyModel extends BaseModuleEntity<string> {
  /** عنوان */
  title: string;
  /** عنوان چندزبانه */
  titleML: string;
  /** عنوان برای ترجمه */
  titleResourceLanguage: string;
  /** لینک به شناسه ماژول */
  linkModuleId?: number;
  /** نام کلاس ماژول CMS */
  cmsModuleClassName: string;
  /** نام اکشن کلاس */
  classActionName: string;
}
