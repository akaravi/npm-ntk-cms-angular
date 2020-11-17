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




    get CheckAccessAddField(): [] {
        return this._bar;
    }
    set bar(value: boolean) {
        this._bar = value;
    }

  CheckAccessField(nameField: string): DataFieldInfoModel {
    if (!this.FieldsInfo) {
      return new DataFieldInfoModel();
    }
    this.FieldsInfo.filter((item) => {
      if (nameField.toLowerCase() === item.FieldName.toLowerCase()) {
        return item;
      }
    });
    return new DataFieldInfoModel();
  }
}
