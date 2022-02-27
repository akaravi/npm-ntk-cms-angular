import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ArticleCategoryModel } from './articleCategoryModel';
import { ArticleShareMainAdminSettingModel } from './articleShareMainAdminSettingModel';
import { ArticleShareReceiverCategoryModel } from './articleShareReceiverCategoryModel';

export class ArticleShareServerCategoryModel extends BaseModuleEntity<number> {
  Description:string;
  LinkShareMainAdminSettingId:number;
  Title:string;
  LinkServerCategoryId:number;
  ServerCategory:ArticleCategoryModel;
  ShareMainAdminSetting:ArticleShareMainAdminSettingModel;
  ShareReciverCategories:ArticleShareReceiverCategoryModel[];
}
