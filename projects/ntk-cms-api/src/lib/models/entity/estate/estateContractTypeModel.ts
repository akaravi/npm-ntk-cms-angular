import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstateContractTypeModel extends BaseModuleEntity<string> {
  Title: string;
  TitleML: string;
  TitleResourceLanguage: string;
  ContentCount: number;
  TitleSoldIt: string;
  TitleSoldItML: string;
  TitleSoldItResourceLanguage: string;
  Description: string;
  HasSalePrice: boolean;
  HasRentPrice: boolean;
  HasDepositPrice: boolean;

  TitleSalePrice: string;
  TitleSalePriceML: string;
  TitleSalePriceResourceLanguage: string;
  TitleRentPrice: string;
  TitleRentPriceML: string;
  TitleRentPriceResourceLanguage: string;
  TitleDepositPrice: string;
  TitleDepositPriceML: string;
  TitleDepositPriceResourceLanguage: string;

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
