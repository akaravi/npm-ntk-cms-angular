import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstateContractTypeModel extends BaseModuleEntity<string> {
  Title: string;
  SoldItTitle: string;
  Description: string;
  HasSalePrice: boolean;
  HasRentPrice: boolean;
  HasDepositPrice: boolean;

  TitleSalePrice: string;
  TitleRentPrice: string;
  TitleDepositPrice: string;

  UnitSalePrice: string;
  UnitRentPrice: string;
  UnitDepositPrice: string;

  SalePriceAllowAgreement: boolean;
  SalePriceMin?: number;
  SalePriceMax?: number;

  RentPriceAllowAgreement: boolean;
  RentPriceMin?: number;
  RentPriceMax?: number;

  DepositPriceAllowAgreement: boolean;
  DepositPriceMin?: number;
  DepositPriceMax?: number;
}
