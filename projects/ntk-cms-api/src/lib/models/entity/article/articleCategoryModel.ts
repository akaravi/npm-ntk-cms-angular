import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ArticleContentCategoryModel } from './articleContentCategoryModel';
import { ArticleContentModel } from './articleContentModel';
//@@tag-Version-2201011
export class ArticleCategoryModel extends BaseModuleEntity<number> {
  title: string;
  titleResourceLanguage: string;
  contentCount: number;
  description: string;
  fontIcon: string;
  linkParentIdNode: string;
  linkParentId: number;
  children: ArticleCategoryModel[];
  category: ArticleCategoryModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: ArticleCategoryModel;
  contents: ArticleContentModel[];
  contentCategores: ArticleContentCategoryModel[];
  linkMainImageId?: number;
  linkMainImageIdSrc: string;
}
