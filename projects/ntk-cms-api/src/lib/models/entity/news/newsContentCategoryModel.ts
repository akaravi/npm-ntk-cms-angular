import { BaseEntity } from '../base/baseEntity';
import { NewsCategoryModel } from './newsCategoryModel';
import { NewsContentTagModel } from './newsContentTagModel';
import { NewsContentSimilarModel} from './newsContentSimilarModel';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { NewsCommentModel } from './newsCommentModel';
import { NewsContentModel } from './newsContentModel';

export class NewsContentCategoryModel extends BaseModuleEntity<number> {
  Content: NewsContentModel;
  Category: NewsCategoryModel;
  LinkCategoryId: number;
  LinkContentId: number;
}
