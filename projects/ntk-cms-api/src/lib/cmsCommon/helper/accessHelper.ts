import { ErrorExcptionResult } from '../../cmsModels/base/errorExcptionResult';

export class AccessHelper {
  AccessDeleteRow(model: ErrorExcptionResult<any>) {
    if (!model) return false;
    if (!model.Access) return false;
    return model.Access.AccessDeleteRow;
  }
  AccessWatchRow(model: ErrorExcptionResult<any>) {
    if (!model) return false;
    if (!model.Access) return false;
    return false; // return model?.Access?.AccessWatchRow;
  }
  AccessEditRow(model: ErrorExcptionResult<any>) {
    if (!model) return false;
    if (!model.Access) return false;
    return model.Access.AccessEditRow;
  }
  AccessAddRow(model: ErrorExcptionResult<any>) {
    if (!model) return false;
    if (!model.Access) return false;
    return model.Access.AccessAddRow;
  }
  AccessRowInPanelDemo(model: ErrorExcptionResult<any>) {
    if (!model) return false;
    if (!model.Access) return false;
    return model.Access.AccessRowInPanelDemo;
  }
  AccessRowWatchInSharingCategory(model: ErrorExcptionResult<any>) {
    if (!model) return false;
    if (!model.Access) return false;
    return model.Access.AccessRowWatchInSharingCategory;
  }
  AccessWatchRowOtherSiteId(model: ErrorExcptionResult<any>) {
    if (!model) return false;
    if (!model.Access) return false;
    return false;
  }
  AccessWatchRowOtherCreatedBy(model: ErrorExcptionResult<any>) {
    if (!model) return false;
    if (!model.Access) return false;
    return model.Access.AccessWatchRowOtherCreatedBy;
  }
  AccessEditRowOtherSiteId(model: ErrorExcptionResult<any>) {
    if (!model) return false;
    if (!model.Access) return false;
    return model.Access.AccessEditRowOtherSiteId;
  }
  AccessEditRowOtherCreatedBy(model: ErrorExcptionResult<any>) {
    if (!model) return false;
    if (!model.Access) return false;
    return model.Access.AccessEditRowOtherCreatedBy;
  }
  AccessDeleteRowOtherCreatedBy(model: ErrorExcptionResult<any>) {
    if (!model) return false;
    if (!model.Access) return false;
    return model.Access.AccessDeleteRowOtherCreatedBy;
  }
}
