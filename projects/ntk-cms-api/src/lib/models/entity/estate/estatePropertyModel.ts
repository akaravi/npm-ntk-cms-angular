import { EnumRecordStatus } from '../../enums/enumRecordStatus';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstateContractModel } from './estateContractModel';
import { EstatePropertyDetailGroupModel } from './estatePropertyDetailGroupModel';
import { EstatePropertyDetailValueModel } from './estatePropertyDetailValueModel';
import { EstatePropertyTypeLanduseModel } from './estatePropertyTypeLanduseModel';
import { EstatePropertyTypeUsageModel } from './estatePropertyTypeUsageModel';


export class EstatePropertyModel extends BaseModuleEntity<string> {
  Title: string;
  CaseCode: string;
  MainAdminRecordStatus = EnumRecordStatus.Pending;
  CreatedYaer?: number;
  Partition: number;
  Area: number;
  LinkCmsUserId?: number;
  LinkEstateUserId: string;

  LinkLocationId: number;
  Description: string;

  LinkPropertyTypeLanduseId: string;
  LinkPropertyTypeUsageId: string;
  PropertyTypeLanduse: EstatePropertyTypeLanduseModel;
  PropertyTypeUsage: EstatePropertyTypeUsageModel;


  /// <summary>
  /// موقعیت جغرافیایی
  /// </summary>
  Geolocationlatitude?: number;
  Geolocationlongitude?: number;

  Address: string;
  LinkMainImageId?: number;
  LinkExtraImageIds: string;
  LinkFileIds: string;
  /// <summary>
  /// تعداد مجموع آرا
  /// </summary>

  ScoreClick: number;
  /// <summary>
  /// مجموع امتیازهای داده شده در آراها
  /// امتیاز از 10 می باشد
  /// </summary>

  ScoreSumPercent: number;

  ViewCount: number;
  // * AboutAgent */
  AboutAgentTel: string;
  AboutAgentMobile: string;
  // * AboutAgent */
  // * AboutCustomer */
  AboutCustomerTel: string;
  AboutCustomerMobile: string;
  // * AboutCustomer */
  Contracts: EstateContractModel[];



  PropertyDetailValues: EstatePropertyDetailValueModel[];
  PropertyDetailGroups: EstatePropertyDetailGroupModel[];


  LinkMainImageIdSrc: string;
  LinkExtraImageIdsSrc: string[];
  LinkFileIdsSrc: string[];
  /** برای انتصا مسقیم فایل آپلود شده */
  UploadFileGUID: string[];
  UrlViewContent: string;
  UrlViewContentQRCodeBase64: string;
  LinkLocationIdTitle: string;
  LinkLocationIdParentTitle: string;
}
