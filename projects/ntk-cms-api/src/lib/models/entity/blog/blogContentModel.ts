import { BaseEntity } from '../base/baseEntity';
import { BlogCategoryModel } from './blogCategoryModel';
import { BlogContentTagModel } from './blogContentTagModel';
import { BlogContentSimilarModel} from './blogContentSimilarModel';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BlogCommentModel } from './blogCommentModel';

export class BlogContentModel extends BaseModuleEntity<number> {
  LinkCategoryId: number;
  Title: string;
  Description: string;
  Body: string;
  FromDate: Date;
  Geolocationlatitude: number;
  Geolocationlongitude: number;
  Keyword: string;
  LinkFileIds: string;
  LinkFilePodcastId: number;
  LinkFileMovieId: number;
  LinkMainImageId: number;
  ScoreClick: number;
  ScoreSumPercent: number;
  ViewCount: number;
  Favorited: boolean;

  ExpireDate: Date;
  ModuleCoreCreatedBy: string;
  ModuleCoreUpdatedBy: string;
  Source: string;
  Comments: BlogCommentModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: BlogCategoryModel;
  Category: BlogCategoryModel;
  ContentTags: BlogContentTagModel[];
  Similars: BlogContentSimilarModel[];
  OtherInfos: string;
  ContentAndParameterValues: any;
  LinkMainImageIdSrc: string;
  LinkFilePodcastIdSrc: string;
  LinkFileMovieIdSrc: string;
  LinkFileIdsSrc: string[];
}
