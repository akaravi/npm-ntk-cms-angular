import { BaseModuleEntity } from '../base/baseModuleEntity';
import { PollingCategoryModel } from './pollingCategoryModel';
import { PollingOptionModel } from './pollingOptionModel';

export class PollingContentModel extends BaseModuleEntity<number> {
  ExpireDate?: Date;
  Title: string;
  Question: string;

  ViewStatisticsBeforeVote: boolean;
  ViewStatisticsAfterVote: boolean;
  // tslint:disable-next-line: variable-name
  virtual_Category: PollingCategoryModel;
  Category: PollingCategoryModel;
  FromDate?: string;
  Geolocationlatitude?: number;
  Geolocationlongitude?: number;
  LinkLocationId?:number;
  LinkLocationIdTitle: string;
  LinkLocationIdParentTitle: string;
  LinkCategoryId?: number;
  LinkFileIds: string;
  LinkFilePodcastId?: number;
  LinkFileMovieId?: number;
  LinkMainImageId?: number;
  ScoreClick: number;
  ScoreSumPercent: number;
  ViewCount: number;
  LinkMainImageIdSrc: string;
  LinkFilePodcastIdSrc: string;
  LinkFileMovieIdSrc: string;
  LinkFileIdsSrc: string[];
  MaxVoteForThisContent: number;
  MaxVoteForEachOption: number;
  Options: PollingOptionModel[];
}
