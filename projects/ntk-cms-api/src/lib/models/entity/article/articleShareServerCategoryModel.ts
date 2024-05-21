import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ArticleCategoryModel } from './articleCategoryModel';
import { ArticleShareMainAdminSettingModel } from './articleShareMainAdminSettingModel';
import { ArticleShareReceiverCategoryModel } from './articleShareReceiverCategoryModel';
//@@tag-Version-2201011
export class ArticleShareServerCategoryModel extends BaseModuleEntity<number> {
  description: string;
  linkShareMainAdminSettingId: number;
  title: string;
  linkServerCategoryId: number;
  serverCategory: ArticleCategoryModel;
  shareMainAdminSetting: ArticleShareMainAdminSettingModel;
  shareReciverCategories: ArticleShareReceiverCategoryModel[];
}
