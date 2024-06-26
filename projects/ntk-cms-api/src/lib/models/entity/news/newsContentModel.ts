import { BaseModuleEntity } from '../base/baseModuleEntity';
import { NewsCategoryModel } from './newsCategoryModel';
import { NewsCommentModel } from './newsCommentModel';
import { NewsContentCategoryModel } from './newsContentCategoryModel';
import { NewsContentSimilarModel } from './newsContentSimilarModel';
import { NewsContentTagModel } from './newsContentTagModel';
//@@tag-Version-2201011
export class NewsContentModel extends BaseModuleEntity<number> {
  linkCategoryId: number;
  title: string;
  description: string;
  body: string;
  fromDate: Date;
  geolocationlatitude?: number;
  geolocationlongitude?: number;
  linkLocationId?: number;
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
  comments: NewsCommentModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: NewsCategoryModel;
  category: NewsCategoryModel;
  contentTags: NewsContentTagModel[];
  similars: NewsContentSimilarModel[];
  contentCategores: NewsContentCategoryModel[];

  otherInfos: string;
  contentAndParameterValues: any;
  linkMainImageIdSrc: string;
  linkFilePodcastIdSrc: string;
  linkFileMovieIdSrc: string;
  linkFileIdsSrc: string[];
  urlViewContent: string;
  urlViewContentShort: string;
  urlViewContentQRCodeBase64: string;
}
