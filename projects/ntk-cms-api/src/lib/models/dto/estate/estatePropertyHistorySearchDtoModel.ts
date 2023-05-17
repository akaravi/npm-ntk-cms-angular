import { FilterModel } from "../../entity/base/filterModel";

export class EstatePropertyHistorySearchDtoModel extends FilterModel {
  onDateTimeFrom: Date;
  onDateTimeTo: Date;
}
