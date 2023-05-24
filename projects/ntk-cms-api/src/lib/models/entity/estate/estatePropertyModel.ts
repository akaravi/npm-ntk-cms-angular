import { DateTypeEnum } from '../../enums/core/dateTypeEnum';
import { EnumRecordStatus } from '../../enums/base/enumRecordStatus';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstateContractModel } from './estateContractModel';
import { EstatePropertyDetailGroupModel } from './estatePropertyDetailGroupModel';
import { EstatePropertyDetailValueModel } from './estatePropertyDetailValueModel';
import { EstatePropertyTypeLanduseModel } from './estatePropertyTypeLanduseModel';
import { EstatePropertyTypeUsageModel } from './estatePropertyTypeUsageModel';
import { File360ViewModel } from '../core-main/file360ViewModel';
import { File360TourModel } from '../core-main/file360TourModel';
//@@tag-Version-2201011
export class EstatePropertyModel extends BaseModuleEntity<string> {
  title: string;
  priority?: number;
  caseCode: string;
  mainAdminRecordStatus = EnumRecordStatus.Pending;
  createdYaer?: number;
  createdYaerType: DateTypeEnum;
  partition: number;
  area: number;
  linkCmsUserId?: number;
  linkEstateUserId: string;
  linkEstateAgencyId: string;
  isSoldIt: boolean;
  reviewDataAfterSoldIt?: Date;
  linkLocationId: number;
  linkLocationCountryId: number;
  description: string;
  descriptionHidden: string;
  viewConfigHiddenInList: boolean;
  linkPropertyTypeLanduseId: string;
  linkPropertyTypeUsageId: string;
  linkPropertyProjectId: string;
  linkPropertyCompanyId: string;
  propertyTypeLanduse: EstatePropertyTypeLanduseModel;
  propertyTypeUsage: EstatePropertyTypeUsageModel;
/**ViewContent */
viewContentHidden:boolean;
siteAdminViewContentHidden:boolean;
/**ViewContent */
  sharingKey: string;
  sharingId: number;
  /// <summary>
  /// موقعیت جغرافیایی
  /// </summary>
  geolocationlatitude?: number;
  geolocationlongitude?: number;

  address: string;
  addressHidden: string;
  linkMainImageId?: number;

  linkExtraImageIds: string;
  linkFileIds: string;
  file360Views: File360ViewModel[];
  file360Tour:File360TourModel;
  /// <summary>
  /// تعداد مجموع آرا
  /// </summary>

  scoreClick: number;
  /// <summary>
  /// مجموع امتیازهای داده شده در آراها
  /// امتیاز از 10 می باشد
  /// </summary>

  scoreSumPercent: number;
  adsActive: boolean;
  adsExpireDate: Date;
  viewCount: number;
  // * AboutAgent */
  aboutAgentTel: string;
  aboutAgentMobile: string;
  // * AboutAgent */
  // * AboutCustomer */
  aboutCustomerTel: string;
  aboutCustomerMobile: string;
  // * AboutCustomer */
  contracts: EstateContractModel[];



  propertyDetailValues: EstatePropertyDetailValueModel[];
  propertyDetailGroups: EstatePropertyDetailGroupModel[];


  linkMainImageIdSrc: string;
  linkExtraImageIdsSrc: string[];
  linkFileIdsSrc: string[];
  /** برای انتصا مسقیم فایل آپلود شده */
  uploadFileGUID: string[];
  urlViewContent: string;
  urlViewContentShort: string;
  urlViewContentQRCodeBase64: string;
  linkLocationCountryIdTitle: string;
  linkLocationIdTitle: string;
  linkLocationIdParentTitle: string;
  favorited: boolean;
  /**Action */
  actionSendSmsToCustomer: boolean;
  actionSendSmsToAgent: boolean;
  actionSendSmsToCustomerOrder: boolean;
  actionSendSmsToContactNumber: string;
}
