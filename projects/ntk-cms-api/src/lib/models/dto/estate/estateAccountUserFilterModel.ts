import { FilterModel } from "../../entity/base/filterModel";

export class EstateAccountUserFilterModel extends FilterModel {
  onDateTimeFrom: Date;
  onDateTimeTo: Date;
  linkResponsibleUserId: number;
  locationListIds: number[];
  linkLocationWorkAreaIds: number[];
}
