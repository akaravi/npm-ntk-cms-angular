import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstateContractTypeModel extends BaseModuleEntity<string> {
  Title: string;
  Description: string;
  HasSalePrice: boolean;
  HasRentPrice: boolean;
  HasDepositPrice: boolean;
  UnitSalePrice: string;

  UnitRentPrice: string;
  UnitDepositPrice: string;

  SalePriceMin?: number;
  SalePriceMax?: number;

  RentPriceMin?: number;
  RentPriceMax?: number;

  DepositPriceMin?: number;
  DepositPriceMax?: number;
}
