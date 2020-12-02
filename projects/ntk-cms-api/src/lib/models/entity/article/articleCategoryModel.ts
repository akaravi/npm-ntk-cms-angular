import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ArticleContentModel } from './articleContentModel';

export class ArticleCategoryModel extends BaseModuleEntity<number> {
  Title: string;
  TitleResourceLanguage: string;
  Description: string;
  FontIcon: string;
  LinkParentIdNode: string;
  LinkParentId: number;
  Children: ArticleCategoryModel[];
  Category: ArticleCategoryModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: ArticleCategoryModel;
  Contents: ArticleContentModel[];
  LinkMainImageId?: number;
  LinkMainImageIdSrc: string;






}
