import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class EstateContractTypeModel extends BaseModuleEntity<string> {
  title: string;
  titleML: string;
  titleResourceLanguage: string;

  orderTitle: string;
  orderTitleML: string;
  orderTitleResourceLanguage: string;

  contentCount: number;
  allowPriceInquiryCalculate: boolean;
  titleSoldIt: string;
  titleSoldItML: string;
  titleSoldItResourceLanguage: string;
  description: string;

  hasSalePrice: boolean;
  hasRentPrice: boolean;
  hasDepositPrice: boolean;
  hasPeriodPrice: boolean;

  titleSalePrice: string;
  titleSalePriceML: string;
  titleSalePriceResourceLanguage: string;

  titleRentPrice: string;
  titleRentPriceML: string;
  titleRentPriceResourceLanguage: string;

  titleDepositPrice: string;
  titleDepositPriceML: string;
  titleDepositPriceResourceLanguage: string;

  titlePeriodPrice: string;
  titlePeriodPriceML: string;
  titlePeriodPriceResourceLanguage: string;
  // unitSalePrice: string;
  // unitRentPrice: string;
  // unitDepositPrice: string;

  salePriceAllowAgreement: boolean;
  // salePriceMin?: number;
  // salePriceMax?: number;

  rentPriceAllowAgreement: boolean;
  rentPriceAllowPriodCount: boolean;
  rentPricePriodTitle: string;
  rentPricePriodTitleML: string;
  rentPricePriodTitleResourceLanguage: string;
  // rentPriceMin?: number;
  // rentPriceMax?: number;

  depositPriceAllowAgreement: boolean;
  // depositPriceMin?: number;
  // depositPriceMax?: number;
  periodPriceAllowAgreement: boolean;
}
