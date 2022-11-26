import { DataFieldInfoModel } from './fieldInfo/dataFieldInfoModel';
//@@tag-Version-2201011
export class AccessModel {
  moduleName: string;
  moduleEntityName: string;
  versionModel:string;
  versionService:string;
  accessDeleteRow = false;
  accessWatchRow = false;
  accessCountRow = false;
  accessEditRow = false;
  accessAddRow = false;
  accessExportFile=false;
  accessRowInPanelDemo = false;
  accessRowWatchInSharingCategory = false;
  accessWatchRowOtherSiteId = false;
  accessWatchRowOtherCreatedBy = false;
  accessCountRowOtherSiteId = false;
  accessCountRowOtherCreatedBy = false;
  accessEditRowOtherSiteId = false;
  accessEditRowOtherCreatedBy = false;
  accessDeleteRowOtherCreatedBy = false;
  fieldsInfo: DataFieldInfoModel[];
}

