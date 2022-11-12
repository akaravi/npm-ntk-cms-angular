import { EstatePropertyExpertPriceTypeEnum } from '../../enums/estate/estatePropertyExpertPriceTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstatePropertyExpertPriceModel extends BaseModuleEntity<string> {
  ExpertPriceType: EstatePropertyExpertPriceTypeEnum;
  Description: string;
  LinkLocationId: number;
  LinkLocationCountryId: number;
  LinkPropertyTypeUsageId: string;
  LinkPropertyTypeLanduseId: string;
  LinkContractTypeId: string;
  LinkCoreCurrencyId: number;
  CountRow: number;

  SalePriceMin: number;
  SalePriceMax: number;
  SalePriceAverage: number;

  RentPriceMin: number;
  RentPriceMax: number;
  RentPriceAverage: number;

  DepositPriceMin: number;
  DepositPriceMax: number;
  DepositPriceAverage: number;

  PeriodPriceMin: number;
  PeriodPriceMax: number;
  PeriodPriceAverage: number;
}
