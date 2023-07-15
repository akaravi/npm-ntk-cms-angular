import { FilterModel } from "../../entity/base/filterModel";

export class EstateAccountAgencyFilterModel extends FilterModel {
  onDateTimeFrom: Date;
  onDateTimeTo: Date;
  linkResponsibleUserId: number;
  locationListIds: number[];
  linkLocationWorkAreaIds: number[];
}
