import { BaseEntity } from '../base/baseEntity';
import { ChartCategoryModel } from './chartCategoryModel';
import { ChartContentTagModel } from './chartContentTagModel';
import { ChartContentSimilarModel} from './chartContentSimilarModel';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ChartCommentModel } from './chartCommentModel';
import { ChartContentModel } from './chartContentModel';
//@@tag-Version-2201011
export class ChartContentCategoryModel extends BaseModuleEntity<number> {
  content: ChartContentModel;
  category: ChartCategoryModel;
  linkCategoryId: number;
  linkContentId: number;
}
