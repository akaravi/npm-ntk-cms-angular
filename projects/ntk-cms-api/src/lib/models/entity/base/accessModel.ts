import { DataFieldInfoModel } from './fieldInfo/dataFieldInfoModel';

export class AccessModel {
  moduleName: string;
  moduleEntityName: string;
  accessDeleteRow = false;
  accessWatchRow = false;
  accessEditRow = false;
  accessAddRow = false;
  accessRowInPanelDemo = false;
  accessRowWatchInSharingCategory = false;
  accessWatchRowOtherSiteId = false;
  accessWatchRowOtherCreatedBy = false;
  accessEditRowOtherSiteId = false;
  accessEditRowOtherCreatedBy = false;
  accessDeleteRowOtherCreatedBy = false;
  fieldsInfo: DataFieldInfoModel[];
}
