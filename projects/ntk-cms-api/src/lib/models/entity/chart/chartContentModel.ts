import { BaseEntity } from '../base/baseEntity';
import { ChartCategoryModel } from './chartCategoryModel';
import { ChartContentTagModel } from './chartContentTagModel';
import { ChartContentSimilarModel } from './chartContentSimilarModel';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ChartCommentModel } from './chartCommentModel';
import { ChartContentCategoryModel } from './chartContentCategoryModel';

export class ChartContentModel extends BaseModuleEntity<number> {
  LinkCategoryId: number;
  Title: string;
  Description: string;
  Body: string;
  FromDate: Date;
  Geolocationlatitude?: number;
  Geolocationlongitude?: number;
  LinkLocationId?:number;
  LinkLocationIdTitle: string;
  LinkLocationIdParentTitle: string;
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
  Comments: ChartCommentModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: ChartCategoryModel;
  Category: ChartCategoryModel;
  ContentTags: ChartContentTagModel[];
  Similars: ChartContentSimilarModel[];
  ContentCategores: ChartContentCategoryModel[];

  OtherInfos: string;
  ContentAndParameterValues: any;
  LinkMainImageIdSrc: string;
  LinkFilePodcastIdSrc: string;
  LinkFileMovieIdSrc: string;
  LinkFileIdsSrc: string[];
  UrlViewContent: string;
  UrlViewContentQRCodeBase64: string;
}
