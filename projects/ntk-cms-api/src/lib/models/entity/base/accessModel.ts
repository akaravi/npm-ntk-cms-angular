import { DataFieldInfoModel } from './fieldInfo/dataFieldInfoModel';

export class AccessModel {
  moduleName: string;
  moduleEntityName: string;
  accessDeleteRow = false;
  accessWatchRow = false;
  accessCountRow = false;
  accessEditRow = false;
  accessAddRow = false;
  accessExportFile=false;

  accessWatchRowOtherSiteId = false;
  accessWatchRowOtherCreatedBy = false;
  accessCountRowOtherSiteId = false;
  accessCountRowOtherCreatedBy = false;
  accessEditRowOtherSiteId = false;
  accessEditRowOtherCreatedBy = false;
  accessDeleteRowOtherCreatedBy = false;
  fieldsInfo: DataFieldInfoModel[];
}
