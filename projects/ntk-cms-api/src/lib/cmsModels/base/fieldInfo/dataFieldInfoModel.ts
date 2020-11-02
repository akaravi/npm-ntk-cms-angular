import { FieldInfoModel } from './fieldInfoModel';

export class DataFieldInfoModel {
  FieldName: string;
  FieldType: string;
  FieldTypeClass: string;
  FieldTitle: string;
  FieldDescription: string;
  FieldScriptDescription: string;
  FieldDefaultValue: string;
  FieldValue: string;
  FieldTypeFullName: string;
  AccessSearchField = false;
  AccessWatchField = false;
  AccessEditField = false;
  AccessAddField = false;
  fieldsInfo: FieldInfoModel[];
}
