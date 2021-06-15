import { BaseEntity } from '../base/baseEntity';
import { BlogCategoryModel } from './blogCategoryModel';
import { BlogContentTagModel } from './blogContentTagModel';
import { BlogContentSimilarModel} from './blogContentSimilarModel';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BlogCommentModel } from './blogCommentModel';
import { BlogContentModel } from './blogContentModel';

export class BlogContentCategoryModel extends BaseModuleEntity<number> {
  Content: BlogContentModel;
  Category: BlogCategoryModel;
  LinkCategoryId: number;
  LinkContentId: number;
}
