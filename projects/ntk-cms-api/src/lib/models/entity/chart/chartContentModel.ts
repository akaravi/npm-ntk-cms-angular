import { BaseEntity } from '../base/baseEntity';
import { ChartCategoryModel } from './chartCategoryModel';
import { ChartContentTagModel } from './chartContentTagModel';
import { ChartContentSimilarModel } from './chartContentSimilarModel';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ChartCommentModel } from './chartCommentModel';
import { ChartContentCategoryModel } from './chartContentCategoryModel';

export class ChartContentModel extends BaseModuleEntity<number> {
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
  comments: ChartCommentModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: ChartCategoryModel;
  category: ChartCategoryModel;
  contentTags: ChartContentTagModel[];
  similars: ChartContentSimilarModel[];
  contentCategores: ChartContentCategoryModel[];

  otherInfos: string;
  contentAndParameterValues: any;
  linkMainImageIdSrc: string;
  linkFilePodcastIdSrc: string;
  linkFileMovieIdSrc: string;
  linkFileIdsSrc: string[];
  urlViewContent: string;
  urlViewContentQRCodeBase64: string;
}
