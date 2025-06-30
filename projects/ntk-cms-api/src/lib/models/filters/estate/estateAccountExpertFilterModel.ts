import { FilterModel } from "../../entity/base/filterModel";

export class EstateAccountExpertFilterModel extends FilterModel {
  onDateTimeFrom: Date;
  onDateTimeTo: Date;
  linkResponsibleUserId: number;
  linkLocationIds: number[];
  linkLocationWorkAreaIds: number[];
}
