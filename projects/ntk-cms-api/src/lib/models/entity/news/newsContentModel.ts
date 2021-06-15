import { BaseEntity } from '../base/baseEntity';
import { NewsCategoryModel } from './newsCategoryModel';
import { NewsContentTagModel } from './newsContentTagModel';
import { NewsContentSimilarModel } from './newsContentSimilarModel';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { NewsCommentModel } from './newsCommentModel';
import { NewsContentCategoryModel } from './newsContentCategoryModel';

export class NewsContentModel extends BaseModuleEntity<number> {
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
  Comments: NewsCommentModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: NewsCategoryModel;
  Category: NewsCategoryModel;
  ContentTags: NewsContentTagModel[];
  Similars: NewsContentSimilarModel[];
  ContentCategores: NewsContentCategoryModel[];

  OtherInfos: string;
  ContentAndParameterValues: any;
  LinkMainImageIdSrc: string;
  LinkFilePodcastIdSrc: string;
  LinkFileMovieIdSrc: string;
  LinkFileIdsSrc: string[];
}
