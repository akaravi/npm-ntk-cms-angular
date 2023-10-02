import { FilterModel } from "../../entity/base/filterModel";
import { EstatePropertyDetailValueModel } from "../../entity/estate/estatePropertyDetailValueModel";

export class EstatePropertyFilterModel extends FilterModel {
  onDateTimeFrom: Date;
  onDateTimeTo: Date;
  linkResponsibleUserId: number;
  caseCode: string;
  linkPropertyTypeLanduseId: string;
  linkPropertyTypeUsageId: string;
  linkContractTypeId: string;
  createdYaer?: number;
  partition?: number;
  area?: number;
  salePriceMin?: number;
  salePriceMax?: number;
  rentPriceMin?: number;
  rentPriceMax?: number;
  depositPriceMin?: number;
  depositPriceMax?: number;
  periodPriceMin?: number;
  periodPriceMax?: number;
  linkLocationIds: number[];
  linkCoreCurrencyId: number;
  propertyDetailValues: EstatePropertyDetailValueModel[];
}
