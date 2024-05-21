
import { RecordStatusEnum } from '../../enums/base/recordStatusEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { File360TourModel } from '../core-main/file360TourModel';
import { File360ViewModel } from '../core-main/file360ViewModel';
//@@tag-Version-2201011
export class EstatePropertyProjectModel extends BaseModuleEntity<string> {
  title: string;
  linkCmsUserId?: number;
  linkPropertyCompanyId: string;
  mainAdminRecordStatus = RecordStatusEnum.Pending;
  description: string;
  descriptionHidden: string;
  address: string;
  body: string;
  geolocationlatitude?: number;
  geolocationlongitude?: number;
  linkLocationId?: number;
  keyword: string;
  linkFileIds: string;
  linkExtraImageIds?: string;
  linkFilePodcastId?: number;
  linkFileMovieId?: number;
  linkMainImageId?: number;
  file360Views: File360ViewModel[];
  file360Tour: File360TourModel;
  scoreClick: number;
  scoreSumPercent: number;
  viewCount: number;
  viewConfigHiddenInList: boolean;
  favorited: boolean;
  source: string;
  fromDate: Date;
  expireDate: Date;
  linkLocationCountryId: number;


  linkMainImageIdSrc: string;
  linkFilePodcastIdSrc: string;
  linkFileMovieIdSrc: string;
  linkFileIdsSrc: string[];
  linkExtraImageIdsSrc: string[];


  uploadFileGUID: string[];
  urlViewContent: string;
  urlViewContentShort: string;
  urlViewContentQRCodeBase64: string;
  linkLocationCountryIdTitle: string;
  linkLocationIdTitle: string;
  linkLocationIdParentTitle: string;

  // * About */
  aboutTel: string;
  aboutMobile: string;
  // * About */

}
