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
      this.AccessAddFields[this.toLowerCaseFirstChar(item.fieldName)] = item.accessAddField;
      this.AccessEditFields[this.toLowerCaseFirstChar(item.fieldName)] = item.accessEditField;
      this.AccessWatchFields[this.toLowerCaseFirstChar(item.fieldName)] = item.accessWatchField;
      this.AccessSearchFields[this.toLowerCaseFirstChar(item.fieldName)] = item.accessSearchField;
    });
  }
  private toLowerCaseFirstChar(str: string) {
    if (!str || str.length == 0)
      return '';
    if (str.length == 1)
      return str.toLowerCase();
    return str[0].toLowerCase() + str.slice(1);
  }
}
