import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstateContractTypeModel } from './estateContractTypeModel';

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
}
