import { DataFieldInfoModel } from './fieldInfo/dataFieldInfoModel';

export class AccessModel {
  AccessDeleteRow = false;
  AccessWatchRow = false;
  AccessEditRow = false;
  AccessAddRow = false;
  AccessRowInPanelDemo = false;
  AccessRowWatchInSharingCategory = false;
  AccessWatchRowOtherSiteId = false;
  AccessWatchRowOtherCreatedBy = false;
  AccessEditRowOtherSiteId = false;
  AccessEditRowOtherCreatedBy = false;
  AccessDeleteRowOtherCreatedBy = false;
  FieldsInfo: DataFieldInfoModel[];
}
