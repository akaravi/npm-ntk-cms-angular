import { BaseEntity } from '../base/baseEntity';
import { ArticleCategoryModel } from './articleCategoryModel';
import { ArticleContentTagModel } from './articleContentTagModel';
import { ArticleContentSimilarModel } from './articleContentSimilarModel';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ArticleCommentModel } from './articleCommentModel';
import { ArticleContentCategoryModel } from './articleContentCategoryModel';
//@@tag-Version-2201011
export class ArticleContentModel extends BaseModuleEntity<number> {
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
  comments: ArticleCommentModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: ArticleCategoryModel;
  category: ArticleCategoryModel;
  contentTags: ArticleContentTagModel[];
  similars: ArticleContentSimilarModel[];
  contentCategores: ArticleContentCategoryModel[];

  otherInfos: string;
  contentAndParameterValues: any;
  linkMainImageIdSrc: string;
  linkFilePodcastIdSrc: string;
  linkFileMovieIdSrc: string;
  linkFileIdsSrc: string[];
  urlViewContent: string;
  urlViewContentQRCodeBase64: string;
}
