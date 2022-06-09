import { BiographyCategoryModel } from './biographyCategoryModel';
import { BiographyContentTagModel } from './biographyContentTagModel';
import { BiographyContentSimilarModel } from './biographyContentSimilarModel';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BiographyCommentModel } from './biographyCommentModel';
import { BiographyContentCategoryModel } from './biographyContentCategoryModel';

export class BiographyContentModel extends BaseModuleEntity<number> {
  linkCategoryId: number;
  title: string;
  description: string;
  body: string;
  fromDate: Date;
  geolocationlatitude?: number;
  geolocationlongitude?: number;
  linkLocationId?:number;
  linkLocationIdTitle: string;
  linkLocationIdParentTitle: string;
  keyword: string;
  linkFileIds: string;
  linkFilePodcastId?: number;
  linkFileMovieId?: number;
  linkMainImageId?: number;
  scoreClick: number;
  scoreSumPercent: number;
  viewCount: number;
  favorited: boolean;

  expireDate: Date;
  moduleCoreCreatedBy: string;
  moduleCoreUpdatedBy: string;
  source: string;
  comments: BiographyCommentModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: BiographyCategoryModel;
  category: BiographyCategoryModel;
  contentTags: BiographyContentTagModel[];
  similars: BiographyContentSimilarModel[];
  contentCategores: BiographyContentCategoryModel[];

  otherInfos: string;
  contentAndParameterValues: any;
  linkMainImageIdSrc: string;
  linkFilePodcastIdSrc: string;
  linkFileMovieIdSrc: string;
  linkFileIdsSrc: string[];



  locationPeriodStart: number;
  locationPeriodEnd: number;
  datePeriodStart?: Date;
  datePeriodEnd?: Date;
  urlViewContent: string;
  urlViewContentQRCodeBase64: string;
}
