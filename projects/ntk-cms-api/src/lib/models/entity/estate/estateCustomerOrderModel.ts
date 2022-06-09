import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstatePropertyDetailGroupModel } from './estatePropertyDetailGroupModel';
import { EstatePropertyDetailValueModel } from './estatePropertyDetailValueModel';
export class EstateCustomerOrderModel extends BaseModuleEntity<string> {
  title: string;
  description: string;
  linkEstateUserId: string;
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
  propertyDetailValues: EstatePropertyDetailValueModel[];
  propertyDetailGroups: EstatePropertyDetailGroupModel[];
  urlViewContent: string;
  urlViewContentQRCodeBase64: string;
}

