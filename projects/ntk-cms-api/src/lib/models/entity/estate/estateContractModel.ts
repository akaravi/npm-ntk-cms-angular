import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstateContractTypeModel } from './estateContractTypeModel';

export class EstateContractModel extends BaseModuleEntity<string> {
  Id: string;
  Description: string;
  LinkEstateContractTypeId: string;
  ContractType: EstateContractTypeModel;
  LinkPropertyId: string;
  SalePriceByAgreement: boolean;
  SalePrice?: number;
  RentPriceByAgreement: boolean;
  RentPrice?: number;
  DepositPriceByAgreement: boolean;
  DepositPrice?: number;
}
