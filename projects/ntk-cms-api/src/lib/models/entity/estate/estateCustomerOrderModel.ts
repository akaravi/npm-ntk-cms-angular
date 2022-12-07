import { EnumSortType } from '../../enums/base/enumSortType';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstatePropertyDetailGroupModel } from './estatePropertyDetailGroupModel';
import { EstatePropertyDetailValueModel } from './estatePropertyDetailValueModel';
//@@tag-Version-2211261
export class EstateCustomerOrderModel extends BaseModuleEntity<string> {
  title: string;
  description: string;
  descriptionHidden: string;
  linkEstateUserId: string;
  linkEstateCustomerCategoryId: string;
  areaAddress: string;
  includeAllSite: boolean;
  linkPropertyIds: string[];
  linkLocationIds: number[];
  linkPropertyTypeLanduseId: string;
  linkPropertyTypeUsageId: string;
  linkContractTypeId: string;
  createdYaer?: number;
  partition?: number;
  area?: number;
  salePriceMin?: number;
  salePriceMax?: number;
  rentPriceMin?: number;
  rentPriceMax?: number;
  depositPriceMin?: number;
  depositPriceMax?: number;
  periodPriceMin?: number;
  periodPriceMax?: number;
  propertyDetailValues: EstatePropertyDetailValueModel[];
  propertyDetailGroups: EstatePropertyDetailGroupModel[];
  urlViewContent: string;
  urlViewContentQRCodeBase64: string;
  linkCoreCurrencyId: number;
  currencyTitle: string;
  currencySymbol: string;
  contactMobiles: string;
  contactMobileList: string[];
  lastResultRowCount?: number;
  resultSortColumn:string;
  resultSortType:EnumSortType;
  /**Action */
  actionSendSmsToCustomer: boolean;
  actionSendSmsToContactNumber: string;
}

