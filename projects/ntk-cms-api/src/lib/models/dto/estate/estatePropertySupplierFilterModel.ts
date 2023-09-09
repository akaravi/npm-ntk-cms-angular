import { FilterModel } from "../../entity/base/filterModel";

export class EstatePropertySupplierFilterModel extends FilterModel {
  onDateTimeFrom: Date;
  onDateTimeTo: Date;
  linkResponsibleUserId: number;
}
