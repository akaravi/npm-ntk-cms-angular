import { FilterModel } from "../../entity/base/filterModel";

export class LinkManagementTargetFilterModel extends FilterModel {
  onDateTimeFrom: Date;
  onDateTimeTo: Date;
  linkResponsibleUserId: number;
  linkBillboardPatternIds: number[];
  linkCategoryIds: number[];
}
