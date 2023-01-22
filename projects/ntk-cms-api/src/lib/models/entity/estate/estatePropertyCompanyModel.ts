
import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class EstatePropertyCompanyModel extends BaseModuleEntity<string> {
  title: string;
  linkCmsUserId?: number;
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
  scoreClick: number;
  scoreSumPercent: number;
  viewCount: number;
  viewConfigHiddenInList:boolean;
  favorited: boolean;
  source: string;

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
