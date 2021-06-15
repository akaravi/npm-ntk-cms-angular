import { BaseEntity } from '../base/baseEntity';
import { ArticleCategoryModel } from './articleCategoryModel';
import { ArticleContentTagModel } from './articleContentTagModel';
import { ArticleContentSimilarModel} from './articleContentSimilarModel';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ArticleCommentModel } from './articleCommentModel';
import { ArticleContentModel } from './articleContentModel';

export class ArticleContentCategoryModel extends BaseModuleEntity<number> {
  Content: ArticleContentModel;
  Category: ArticleCategoryModel;
  LinkCategoryId: number;
  LinkContentId: number;
}
