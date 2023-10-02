import { FilterModel } from "../../entity/base/filterModel";

export class EstatePropertyProjectFilterModel extends FilterModel {
  onDateTimeFrom: Date;
  onDateTimeTo: Date;
  linkResponsibleUserId: number;
}
