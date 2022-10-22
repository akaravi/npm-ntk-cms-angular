import { DateTypeEnum } from '../../enums/core/dateTypeEnum';
import { EnumRecordStatus } from '../../enums/enumRecordStatus';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstateContractModel } from './estateContractModel';
import { EstatePropertyDetailGroupModel } from './estatePropertyDetailGroupModel';
import { EstatePropertyDetailValueModel } from './estatePropertyDetailValueModel';
import { EstatePropertyTypeLanduseModel } from './estatePropertyTypeLanduseModel';
import { EstatePropertyTypeUsageModel } from './estatePropertyTypeUsageModel';


export class EstatePropertyModel extends BaseModuleEntity<string> {
  title: string;
  caseCode: string;
  mainAdminRecordStatus = EnumRecordStatus.Pending;
  createdYaer?: number;
  createdYaerType: DateTypeEnum;
  partition: number;
  area: number;
  linkCmsUserId?: number;
  linkEstateUserId: string;
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
  propertyTypeLanduse: EstatePropertyTypeLanduseModel;
  propertyTypeUsage: EstatePropertyTypeUsageModel;

  sharingKey: number;
  /// <summary>
  /// موقعیت جغرافیایی
  /// </summary>
  geolocationlatitude?: number;
  geolocationlongitude?: number;

  address: string;
  linkMainImageId?: number;
  linkExtraImageIds: string;
  linkFileIds: string;
  /// <summary>
  /// تعداد مجموع آرا
  /// </summary>

  scoreClick: number;
  /// <summary>
  /// مجموع امتیازهای داده شده در آراها
  /// امتیاز از 10 می باشد
  /// </summary>

  scoreSumPercent: number;
  adsActive:boolean;
  adsExpireDate:Date;
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
  urlViewContentQRCodeBase64: string;
  linkLocationCountryIdTitle: string;
  linkLocationIdTitle: string;
  linkLocationIdParentTitle: string;
  favorited: boolean;
  /**Action */
  actionSendSmsToCustomer: boolean;
  actionSendSmsToAgent: boolean;
  actionSendSmsToCustomerOrder: boolean;
}
