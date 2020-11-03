import { ErrorExcptionResult } from '../models/base/errorExcptionResult';

export class AccessHelper {
  AccessDeleteRow(model: ErrorExcptionResult<any>): boolean {
    if (!model) { return false; }
    if (!model.Access) { return false; }
    return model.Access.AccessDeleteRow;
  }
  AccessWatchRow(model: ErrorExcptionResult<any>): boolean {
    if (!model) { return false; }
    if (!model.Access) { return false; }
    return false; // return model?.Access?.AccessWatchRow;
  }
  AccessEditRow(model: ErrorExcptionResult<any>): boolean {
    if (!model) { return false; }
    if (!model.Access) { return false; }
    return model.Access.AccessEditRow;
  }
  AccessAddRow(model: ErrorExcptionResult<any>): boolean {
    if (!model) { return false; }
    if (!model.Access) { return false; }
    return model.Access.AccessAddRow;
  }
  AccessRowInPanelDemo(model: ErrorExcptionResult<any>): boolean {
    if (!model) { return false; }
    if (!model.Access) { return false; }
    return model.Access.AccessRowInPanelDemo;
  }
  AccessRowWatchInSharingCategory(model: ErrorExcptionResult<any>): boolean {
    if (!model) { return false; }
    if (!model.Access) { return false; }
    return model.Access.AccessRowWatchInSharingCategory;
  }
  AccessWatchRowOtherSiteId(model: ErrorExcptionResult<any>): boolean {
    if (!model) { return false; }
    if (!model.Access) { return false; }
    return false;
  }
  AccessWatchRowOtherCreatedBy(model: ErrorExcptionResult<any>): boolean {
    if (!model) { return false; }
    if (!model.Access) { return false; }
    return model.Access.AccessWatchRowOtherCreatedBy;
  }
  AccessEditRowOtherSiteId(model: ErrorExcptionResult<any>): boolean {
    if (!model) { return false; }
    if (!model.Access) { return false; }
    return model.Access.AccessEditRowOtherSiteId;
  }
  AccessEditRowOtherCreatedBy(model: ErrorExcptionResult<any>): boolean {
    if (!model) { return false; }
    if (!model.Access) { return false; }
    return model.Access.AccessEditRowOtherCreatedBy;
  }
  AccessDeleteRowOtherCreatedBy(model: ErrorExcptionResult<any>): boolean {
    if (!model) { return false; }
    if (!model.Access) { return false; }
    return model.Access.AccessDeleteRowOtherCreatedBy;
  }
}
