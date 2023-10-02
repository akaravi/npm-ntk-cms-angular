import { FilterModel } from "../../entity/base/filterModel";

export class EstatePropertyHistoryFilterModel extends FilterModel {
  onDateTimeFrom: Date;
  onDateTimeTo: Date;
  linkResponsibleUserId: number;
}
