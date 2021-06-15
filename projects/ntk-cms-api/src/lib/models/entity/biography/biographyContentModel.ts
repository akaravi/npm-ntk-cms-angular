import { BaseEntity } from '../base/baseEntity';
import { BiographyCategoryModel } from './biographyCategoryModel';
import { BiographyContentTagModel } from './biographyContentTagModel';
import { BiographyContentSimilarModel } from './biographyContentSimilarModel';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BiographyCommentModel } from './biographyCommentModel';
import { BiographyContentCategoryModel } from './biographyContentCategoryModel';

export class BiographyContentModel extends BaseModuleEntity<number> {
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
  Comments: BiographyCommentModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: BiographyCategoryModel;
  Category: BiographyCategoryModel;
  ContentTags: BiographyContentTagModel[];
  Similars: BiographyContentSimilarModel[];
  ContentCategores: BiographyContentCategoryModel[];

  OtherInfos: string;
  ContentAndParameterValues: any;
  LinkMainImageIdSrc: string;
  LinkFilePodcastIdSrc: string;
  LinkFileMovieIdSrc: string;
  LinkFileIdsSrc: string[];



  LocationPeriodStart: number;
  LocationPeriodEnd: number;
  DatePeriodStart?: Date;
  DatePeriodEnd?: Date;
}
