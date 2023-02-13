
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { File360ViewModel } from '../core-main/file360ViewModel';
//@@tag-Version-2201011
export class EstatePropertyProjectModel extends BaseModuleEntity<string> {
  title: string;
  linkCmsUserId?: number;
  linkPropertyCompanyId: string;
  mainAdminRecordStatus: string;
  description: string;
  address:string;
  body: string;
  geolocationlatitude?: number;
  geolocationlongitude?: number;
  linkLocationId?:number;
  keyword: string;
  linkFileIds: string;
  linkExtraImageIds?: string;
  linkFilePodcastId?: number;
  linkFileMovieId?: number;
  linkMainImageId?: number;
  file360Views: File360ViewModel[];
  scoreClick: number;
  scoreSumPercent: number;
  viewCount: number;
  viewConfigHiddenInList:boolean;
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
