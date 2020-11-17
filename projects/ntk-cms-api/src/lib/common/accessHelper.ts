import { AccessModel } from '../models/entity/base/accessModel';

export class AccessHelper {
  AccessAddFields: {};
  AccessEditFields: {};
  AccessFieldsSet(Access: AccessModel): void {
    this.AccessEditFields = {};
    Access.FieldsInfo.filter((item) => {
      this.AccessAddFields[item.FieldName] = item.AccessAddField;
      this.AccessEditFields[item.FieldName] = item.AccessEditField;
    });
  }
  AccessDeleteRow(Access: AccessModel): boolean {
    if (!Access) { return false; }
    return Access.AccessDeleteRow;
  }

  AccessEditRow(Access: AccessModel): boolean {
    if (!Access) { return false; }
    return Access.AccessEditRow;
  }
  AccessAddRow(Access: AccessModel): boolean {
    if (!Access) { return false; }
    return Access.AccessAddRow;
  }
  AccessRowInPanelDemo(Access: AccessModel): boolean {
    if (!Access) { return false; }
    return Access.AccessRowInPanelDemo;
  }
  AccessRowWatchInSharingCategory(Access: AccessModel): boolean {
    if (!Access) { return false; }
    return Access.AccessRowWatchInSharingCategory;
  }
  AccessWatchRowOtherSiteId(Access: AccessModel): boolean {
    if (!Access) { return false; }
    return Access.AccessWatchRowOtherSiteId;
  }
  AccessWatchRowOtherCreatedBy(Access: AccessModel): boolean {
    if (!Access) { return false; }
    return Access.AccessWatchRowOtherCreatedBy;
  }
  AccessEditRowOtherSiteId(Access: AccessModel): boolean {
    if (!Access) { return false; }
    return Access.AccessEditRowOtherSiteId;
  }
  AccessEditRowOtherCreatedBy(Access: AccessModel): boolean {
    if (!Access) { return false; }
    return Access.AccessEditRowOtherCreatedBy;
  }
  AccessDeleteRowOtherCreatedBy(Access: AccessModel): boolean {
    if (!Access) { return false; }
    return Access.AccessDeleteRowOtherCreatedBy;
  }
}
