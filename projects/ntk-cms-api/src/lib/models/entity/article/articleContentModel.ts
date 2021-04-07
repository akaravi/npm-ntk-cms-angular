import { BaseEntity } from '../base/baseEntity';
import { ArticleCategoryModel } from './articleCategoryModel';
import { ArticleContentTagModel } from './articleContentTagModel';
import { ArticleContentSimilarModel } from './articleContentSimilarModel';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ArticleCommentModel } from './articleCommentModel';

export class ArticleContentModel extends BaseModuleEntity<number> {
  LinkCategoryId: number;
  Title: string;
  Description: string;
  Body: string;
  FromDate: Date;
  Geolocationlatitude: number;
  Geolocationlongitude: number;
  Keyword: string;
  LinkFileIds: string;
  LinkFilePodcastId?: number;
  LinkFileMovieId?: number;
  LinkMainImageId?: number;
  ScoreClick: number;
  ScoreSumPercent: number;
  ViewCount: number;
  Favorited: boolean;

  ExpireDate: Date;
  ModuleCoreCreatedBy: string;
  ModuleCoreUpdatedBy: string;
  Source: string;
  Comments: ArticleCommentModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: ArticleCategoryModel;
  Category: ArticleCategoryModel;
  ContentTags: ArticleContentTagModel[];
  Similars: ArticleContentSimilarModel[];
  OtherInfos: string;
  ContentAndParameterValues: any;
  LinkMainImageIdSrc: string;
  LinkFilePodcastIdSrc: string;
  LinkFileMovieIdSrc: string;
  LinkFileIdsSrc: string[];
}
