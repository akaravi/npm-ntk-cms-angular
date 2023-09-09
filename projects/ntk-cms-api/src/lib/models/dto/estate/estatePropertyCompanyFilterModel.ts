import { FilterModel } from "../../entity/base/filterModel";

export class EstatePropertyCompanyFilterModel extends FilterModel {
  onDateTimeFrom: Date;
  onDateTimeTo: Date;
  linkResponsibleUserId: number;
}
