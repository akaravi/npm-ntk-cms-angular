import { BaseModuleEntity } from '../base/baseModuleEntity';
import { File360TourModel } from '../core-main/file360TourModel';
import { File360ViewModel } from '../core-main/file360ViewModel';
import { CatalogCategoryModel } from './catalogCategoryModel';
import { CatalogContentOtherInfoModel } from './catalogContentOtherInfoModel';
import { CatalogContentPageModel } from './catalogContentPageModel';

//@@tag-Version-2201011
export class CatalogContentModel extends BaseModuleEntity<string> {
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
  file360Views: File360ViewModel[];
  file360Tour: File360TourModel;
  scoreClick: number;
  scoreSumPercent: number;
  viewCount: number;
  favorited: boolean;

  expireDate: Date;
  moduleCoreCreatedBy: string;
  moduleCoreUpdatedBy: string;
  source: string;

  // tslint:disable-next-line: variable-name
  virtual_Category: CatalogCategoryModel;
  category: CatalogCategoryModel;
  linkContentCategoryIds: string[];
  otherInfos: CatalogContentOtherInfoModel[];
  contentPages: CatalogContentPageModel[];
  contentAndParameterValues: any;
  linkMainImageIdSrc: string;
  linkFilePodcastIdSrc: string;
  linkFileMovieIdSrc: string;
  linkFileIdsSrc: string[];
  urlViewContent: string;
  urlViewContentShort: string;
  urlViewContentQRCodeBase64: string;
}
