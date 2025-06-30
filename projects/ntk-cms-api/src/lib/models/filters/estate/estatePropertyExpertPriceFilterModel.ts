import { FilterModel } from "../../entity/base/filterModel";

export class EstatePropertyExpertPriceFilterModel extends FilterModel {
  onDateTimeFrom: Date;
  onDateTimeTo: Date;
  linkLocationIds: number[];
  linkCoreCurrencyId: number;
}
