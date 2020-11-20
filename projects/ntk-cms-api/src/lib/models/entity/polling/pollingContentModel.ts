import { BaseModuleEntity } from '../base/baseModuleEntity';
import { PollingCategoryModel } from './pollingCategoryModel';
import { PollingOptionModel } from './pollingOptionModel';

export class PollingContentModel extends BaseModuleEntity<number> {
  Source: string;
  ExpireDate?: Date;
  ViewStatisticsBeforeVote: boolean;
  ViewStatisticsAfterVote: boolean;
  // tslint:disable-next-line: variable-name
  virtual_Category: PollingCategoryModel;
  Category: PollingCategoryModel;
  Body: string;
  Description: string;
  FromDate?: string;
  Geolocationlatitude?: number;
  Geolocationlongitude?: number;
  Keyword: string;
  LinkCategoryId?: number;
  LinkFileIds: string;
  LinkFilePodcastId?: number;
  LinkFileMovieId?: number;
  LinkMainImageId?: number;
  ScoreClick: number;
  ScoreSumPercent: number;
  Title: string;
  ViewCount: number;
  Favorited: boolean;
  LinkMainImageIdSrc: string;
  LinkFilePodcastIdSrc: string;
  LinkFileMovieIdSrc: string;
  LinkFileIdsSrc: string[];
  Question: string;
  MaxVoteForThisContent: number;
  MaxVoteForEachOption: number;
  Options: PollingOptionModel[];
}
