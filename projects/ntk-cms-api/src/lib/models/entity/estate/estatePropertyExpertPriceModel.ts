import { EstatePropertyExpertPriceTypeEnum } from '../../enums/estate/estatePropertyExpertPriceTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstatePropertyExpertPriceModel extends BaseModuleEntity<string> {
  expertPriceType: EstatePropertyExpertPriceTypeEnum;
  description: string;
  linkLocationId: number;
  linkLocationCountryId: number;
  linkPropertyTypeUsageId: string;
  linkPropertyTypeLanduseId: string;
  linkContractTypeId: string;
  linkCoreCurrencyId: number;
  countRow: number;

  salePriceMin: number;
  salePriceMax: number;
  salePriceAverage: number;

  rentPriceMin: number;
  rentPriceMax: number;
  rentPriceAverage: number;

  depositPriceMin: number;
  depositPriceMax: number;
  depositPriceAverage: number;

  periodPriceMin: number;
  periodPriceMax: number;
  periodPriceAverage: number;
}
