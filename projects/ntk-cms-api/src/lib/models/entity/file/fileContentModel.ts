import { FileCategoryModel } from './fileCategoryModel';
import { BaseModuleEntity } from '../base/baseModuleEntity';

export class FileContentModel extends BaseModuleEntity<number> {
  linkCategoryId: number;
  fileName: string;
  description: string;
  body: string;
  fromDate: Date;
  geolocationlatitude: number;
  geolocationlongitude: number;
  keyword: string;
  linkFileIds: string;
  linkFilePodcastId?: number;
  linkFileMovieId?: number;
  linkMainImageId?: number;
  scoreClick: number;
  scoreSumPercent: number;
  viewCount: number;
  favorited: boolean;
  fileSize: number;
  expireDate: Date;
  moduleCoreCreatedBy: string;
  moduleCoreUpdatedBy: string;
  source: string;
  // tslint:disable-next-line: variable-name
  virtual_Category: FileCategoryModel;
  category: FileCategoryModel;
  otherInfos: string;
  contentAndParameterValues: any;
  linkMainImageIdSrc: string;
  downloadLinksrc: string;
  downloadLinksrcByDomain: string;
  downloadThumbnailSrc : string;
  extension: string;
  fileExist: boolean;
  fileExistChecked: Date;
  fileLastUseed: Date;
  fileSrc: string;
  renderOrderImagePlace: number;
  uploadFileGUID: string;
}
