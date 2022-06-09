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
    access.fieldsInfo.filter((item) => {
      this.AccessAddFields[item.fieldName] = item.accessAddField;
      this.AccessEditFields[item.fieldName] = item.accessEditField;
      this.AccessWatchFields[item.fieldName] = item.accessWatchField;
      this.AccessSearchFields[item.fieldName] = item.accessSearchField;
    });
  }
}
