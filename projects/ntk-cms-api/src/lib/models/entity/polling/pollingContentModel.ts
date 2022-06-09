import { BaseModuleEntity } from '../base/baseModuleEntity';
import { PollingCategoryModel } from './pollingCategoryModel';
import { PollingOptionModel } from './pollingOptionModel';

export class PollingContentModel extends BaseModuleEntity<number> {
  expireDate?: Date;
  title: string;
  question: string;

  viewStatisticsBeforeVote: boolean;
  viewStatisticsAfterVote: boolean;
  // tslint:disable-next-line: variable-name
  virtual_Category: PollingCategoryModel;
  category: PollingCategoryModel;
  fromDate?: string;
  geolocationlatitude?: number;
  geolocationlongitude?: number;
  linkLocationId?:number;
  linkLocationIdTitle: string;
  linkLocationIdParentTitle: string;
  linkCategoryId?: number;
  linkFileIds: string;
  linkFilePodcastId?: number;
  linkFileMovieId?: number;
  linkMainImageId?: number;
  scoreClick: number;
  scoreSumPercent: number;
  viewCount: number;
  linkMainImageIdSrc: string;
  linkFilePodcastIdSrc: string;
  linkFileMovieIdSrc: string;
  linkFileIdsSrc: string[];
  maxVoteForThisContent: number;
  maxVoteForEachOption: number;
  options: PollingOptionModel[];
}
