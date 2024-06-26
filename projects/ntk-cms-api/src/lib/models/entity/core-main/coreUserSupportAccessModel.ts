import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
export class CoreUserSupportAccessModel extends BaseEntity<number> {
  linkSiteId: number;
  linkUserId: number;
  moduleName: string;
  moduleEntityName: string;
  accessDeleteRow = false;
  accessWatchRow = false;
  accessCountRow = false;
  accessEditRow = false;
  accessAddRow = false;
  accessExportFile = false;
  accessWatchRowOtherSiteId = false;
  accessWatchRowOtherCreatedBy = false;
  accessCountRowOtherSiteId = false;
  accessCountRowOtherCreatedBy = false;
  accessEditRowOtherSiteId = false;
  accessEditRowOtherCreatedBy = false;
  accessDeleteRowOtherCreatedBy = false;
}
