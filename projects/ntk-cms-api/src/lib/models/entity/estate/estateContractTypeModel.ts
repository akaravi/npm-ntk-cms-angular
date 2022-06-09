import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstateContractTypeModel extends BaseModuleEntity<string> {
  title: string;
  titleML: string;
  titleResourceLanguage: string;
  contentCount: number;
  titleSoldIt: string;
  titleSoldItML: string;
  titleSoldItResourceLanguage: string;
  description: string;
  hasSalePrice: boolean;
  hasRentPrice: boolean;
  hasDepositPrice: boolean;

  titleSalePrice: string;
  titleSalePriceML: string;
  titleSalePriceResourceLanguage: string;
  titleRentPrice: string;
  titleRentPriceML: string;
  titleRentPriceResourceLanguage: string;
  titleDepositPrice: string;
  titleDepositPriceML: string;
  titleDepositPriceResourceLanguage: string;

  unitSalePrice: string;
  unitRentPrice: string;
  unitDepositPrice: string;

  salePriceAllowAgreement: boolean;
  salePriceMin?: number;
  salePriceMax?: number;

  rentPriceAllowAgreement: boolean;
  rentPriceMin?: number;
  rentPriceMax?: number;

  depositPriceAllowAgreement: boolean;
  depositPriceMin?: number;
  depositPriceMax?: number;
}
