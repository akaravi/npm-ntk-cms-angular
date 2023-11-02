
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { File360TourModel } from '../core-main/file360TourModel';
import { File360ViewModel } from '../core-main/file360ViewModel';
//@@tag-Version-2311011
export class EstatePropertyCompanyModel extends BaseModuleEntity<string> {
  title: string;
  linkCmsUserId?: number;
  mainAdminRecordStatus: string;
  description: string;
  descriptionHidden: string;
  address: string;
  phoneNumber: string;
  mobileNumber: string;
  linkLocationIds: number[];
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
  scoreClick: number;
  scoreSumPercent: number;
  viewCount: number;
  viewConfigHiddenInList: boolean;
  favorited: boolean;
  source: string;

  linkLocationCountryId: number;


  linkMainImageIdSrc: string;
  file360Views: File360ViewModel[];
  file360Tour: File360TourModel;
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
