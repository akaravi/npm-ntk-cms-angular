import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstateContractModel } from './estateContractModel';
import { EstatePropertyDetailGroupModel } from './estatePropertyDetailGroupModel';
import { EstatePropertyDetailValueModel } from './estatePropertyDetailValueModel';
import { EstatePropertyTypeModel } from './estatePropertyTypeModel';

export class EstatePropertyModel extends BaseModuleEntity<string> {
  Title: string;

  CreatedYaer?: number;
  Partition: number;
  Area: number;
  LinkEstateUserId?: number;

  LinkLocationId: number;
  Description: string;
  LinkCmsUserId: number;
  LinkPropertyTypeId: string;
  PropertyType: EstatePropertyTypeModel;


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

  Contracts: EstateContractModel[]



  PropertyDetailValues: EstatePropertyDetailValueModel[]
  PropertyDetailGroups: EstatePropertyDetailGroupModel[]


  LinkMainImageIdSrc: string;
  LinkExtraImageIdsSrc: string[];
  LinkFileIdsSrc: string[];
}
