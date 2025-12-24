import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ArticleContentCategoryModel } from './articleContentCategoryModel';
import { ArticleContentModel } from './articleContentModel';
//@@tag-Version-2201011
/**
 * مدل دسته‌بندی مقاله
 */
export class ArticleCategoryModel extends BaseModuleEntity<number> {
  /** عنوان */
  title: string;
  /** عنوان منبع زبان */
  titleResourceLanguage: string;
  /** تعداد محتوا */
  contentCount: number;
  /** توضیحات */
  description: string;
  /** آیکن فونت */
  fontIcon: string;
  /** شناسه گره والد */
  linkParentIdNode: string;
  /** لینک به شناسه والد */
  linkParentId: number;
  /** لیست فرزندان */
  children: ArticleCategoryModel[];
  /** دسته‌بندی */
  category: ArticleCategoryModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: ArticleCategoryModel;
  /** لیست محتواها */
  contents: ArticleContentModel[];
  /** لیست دسته‌بندی‌های محتوا */
  contentCategores: ArticleContentCategoryModel[];
  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
}
