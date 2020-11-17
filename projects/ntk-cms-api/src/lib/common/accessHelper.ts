import { AccessModel } from '../models/entity/base/accessModel';

export class AccessHelper {

  Access: AccessModel;
  AccessAddFields: any;
  AccessEditFields: any;
  AccessWatchFields: any;
  AccessSearchFields: any;

  AccessFieldsSet(access: AccessModel): void {
    this.Access = access;
    this.AccessAddFields = {};
    this.AccessEditFields = {};
    this.AccessWatchFields = {};
    this.AccessSearchFields = {};
    access.FieldsInfo.filter((item) => {
      this.AccessAddFields[item.FieldName] = item.AccessAddField;
      this.AccessEditFields[item.FieldName] = item.AccessEditField;
      this.AccessWatchFields[item.FieldName] = item.AccessWatchField;
      this.AccessSearchFields[item.FieldName] = item.AccessSearchField;
    });
  }
}
