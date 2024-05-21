import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstateContractTypeModel } from './estateContractTypeModel';
//@@tag-Version-2201011
export class EstateContractModel extends BaseModuleEntity<string> {
  description: string;
  linkEstateContractTypeId: string;
  contractType: EstateContractTypeModel;
  linkPropertyId: string;
  salePriceByAgreement: boolean;
  salePrice?: number;
  rentPriceByAgreement: boolean;
  rentPrice?: number;
  depositPriceByAgreement: boolean;
  depositPrice?: number;
  periodPriceByAgreement: boolean;
  periodPrice?: number;
  periodCount?: number;
  linkCoreCurrencyId: number;
  currencyTitle: string;
  currencySymbol: string;
}
