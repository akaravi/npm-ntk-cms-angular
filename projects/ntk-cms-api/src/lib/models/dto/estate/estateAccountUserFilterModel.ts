import { FilterModel } from "../../entity/base/filterModel";

export class EstateAccountUserFilterModel extends FilterModel{
  onDateTimeFrom: Date;
  onDateTimeTo: Date;
  locationListIds:number[];
  linkLocationWorkAreaIds:number[];
}
