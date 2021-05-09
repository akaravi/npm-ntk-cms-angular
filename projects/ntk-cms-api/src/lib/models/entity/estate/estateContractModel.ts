import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstateContractTypeModel } from './estateContractTypeModel';

export class EstateContractModel extends BaseModuleEntity<string> {
  Id: string;
  Description: string;
  LinkEstateContractTypeId: string;
  ContractType: EstateContractTypeModel;
  LinkPropertyId: string;
  SalePrice?: number;
  RentPrice?: number;
  DepositPrice?: number;
}
