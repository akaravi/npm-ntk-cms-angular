import { FilterModel } from "../../entity/base/filterModel";

export class LinkManagementBillboardFilterModel extends FilterModel {
  onDateTimeFrom: Date;
  onDateTimeTo: Date;
  linkResponsibleUserId: number;
  linkBillboardPatternIds: number[];
  linkCategoryIds: number[];
}
