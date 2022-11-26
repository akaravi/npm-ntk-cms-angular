
import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class EstatePropertyProjectModel extends BaseModuleEntity<string> {
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
  urlViewContentQRCodeBase64: string;
  linkLocationCountryIdTitle: string;
  linkLocationIdTitle: string;
  linkLocationIdParentTitle: string;

  // * AboutAgent */
  aboutAgentTel: string;
  aboutAgentMobile: string;
  // * AboutAgent */
  // * AboutCustomer */
  aboutCustomerTel: string;
  aboutCustomerMobile: string;
  // * AboutCustomer */
    /**Action */
    actionSendSmsToCustomer: boolean;
    actionSendSmsToAgent: boolean;
    actionSendSmsToCustomerOrder: boolean;
}
