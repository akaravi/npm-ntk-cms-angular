import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstatePropertyDetailValueModel } from './estatePropertyDetailValueModel';
export class EstateCustomerOrderModel extends BaseModuleEntity<string> {
  Title: string;
  Description: string;
  LinkCmsUserId?: number;
  AreaAddress: string;
  LinkPropertyIds: string[];
  LinkLocationIds: number[];
  LinkPropertyTypeLanduseId: string;
  LinkPropertyTypeUsageId: string;
  LinkContractTypeId: string;
  SalePriceMin?: number;
  SalePriceMax?: number;
  RentPriceMin?: number;
  RentPriceMax?: number;
  DepositPriceMin?: number;
  DepositPriceMax?: number;
  PropertyDetailValues: EstatePropertyDetailValueModel[];
  UrlViewContent: string;
  UrlViewContentQRCodeBase64: string;
}

