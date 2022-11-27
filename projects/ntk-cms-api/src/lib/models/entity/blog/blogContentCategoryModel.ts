import { BaseEntity } from '../base/baseEntity';
import { BlogCategoryModel } from './blogCategoryModel';
import { BlogContentTagModel } from './blogContentTagModel';
import { BlogContentSimilarModel} from './blogContentSimilarModel';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BlogCommentModel } from './blogCommentModel';
import { BlogContentModel } from './blogContentModel';
//@@tag-Version-2201011
export class BlogContentCategoryModel extends BaseModuleEntity<number> {
  content: BlogContentModel;
  category: BlogCategoryModel;
  linkCategoryId: number;
  linkContentId: number;
}
