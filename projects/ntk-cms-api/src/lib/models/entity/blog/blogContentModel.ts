import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BlogCategoryModel } from './blogCategoryModel';
import { BlogCommentModel } from './blogCommentModel';
import { BlogContentCategoryModel } from './blogContentCategoryModel';
import { BlogContentSimilarModel } from './blogContentSimilarModel';
import { BlogContentTagModel } from './blogContentTagModel';
//@@tag-Version-2201011
export class BlogContentModel extends BaseModuleEntity<number> {
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
  comments: BlogCommentModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: BlogCategoryModel;
  category: BlogCategoryModel;
  contentTags: BlogContentTagModel[];
  similars: BlogContentSimilarModel[];
  contentCategores: BlogContentCategoryModel[];
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
