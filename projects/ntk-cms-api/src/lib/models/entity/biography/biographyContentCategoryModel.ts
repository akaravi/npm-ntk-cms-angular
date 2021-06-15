import { BaseEntity } from '../base/baseEntity';
import { BiographyCategoryModel } from './biographyCategoryModel';
import { BiographyContentTagModel } from './biographyContentTagModel';
import { BiographyContentSimilarModel} from './biographyContentSimilarModel';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BiographyCommentModel } from './biographyCommentModel';
import { BiographyContentModel } from './biographyContentModel';

export class BiographyContentCategoryModel extends BaseModuleEntity<number> {
  Content: BiographyContentModel;
  Category: BiographyCategoryModel;
  LinkCategoryId: number;
  LinkContentId: number;
}
